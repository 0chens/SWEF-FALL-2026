import hmac
import os
from datetime import datetime, timedelta, timezone
from functools import wraps

import jwt
from flask import Blueprint, jsonify, request

from credentials import USERS

auth_bp = Blueprint("auth", __name__)

# Real value comes from backend/.env (see .env.example). The fallback is only
# so the app still starts in development if .env is missing.
SECRET_KEY = os.getenv("SECRET_KEY", "dev-only-fallback-secret-please-set-SECRET_KEY-in-env")
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 60  # token is valid for 1 hour


# ---------- Helpers ----------

def create_access_token(username: str) -> str:
    """Make a signed JWT that says who the user is and when it expires."""
    payload = {
        "sub": username,  # "subject" = who this token belongs to
        "exp": datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES),
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def decode_token(token: str) -> dict | None:
    """Return the token's payload if the signature is valid and not expired, else None."""
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except jwt.InvalidTokenError:  # covers bad signature, expired, malformed
        return None


def require_auth(f):
    """Decorator: only run the route if the request has a valid Bearer token."""
    @wraps(f)
    def decorated(*args, **kwargs):
        auth_header = request.headers.get("Authorization", "")
        if not auth_header.startswith("Bearer "):
            return jsonify({"error": "Missing or invalid Authorization header"}), 401

        token = auth_header.split(" ", 1)[1]
        payload = decode_token(token)
        if payload is None:
            return jsonify({"error": "Invalid or expired token"}), 401

        request.user = payload  # let the route know who is logged in
        return f(*args, **kwargs)
    return decorated


# ---------- Routes ----------

@auth_bp.post("/login")
def login():
    body = request.get_json(silent=True) or {}
    username = str(body.get("username", "")).strip()
    password = str(body.get("password", ""))

    expected_password = USERS.get(username)
    # compare_digest compares in constant time so attackers can't
    # guess the password by measuring how long the check takes.
    if expected_password is None or not hmac.compare_digest(password, expected_password):
        return jsonify({"error": "Invalid username or password"}), 401

    return jsonify({"access_token": create_access_token(username), "token_type": "bearer"})


@auth_bp.get("/me")
@require_auth
def me():
    username = request.user["sub"]
    return jsonify({"message": f"Welcome, {username}!", "username": username})
