# Homework 5 submission: Login with Server-Side Auth

## How to run

**Backend** (Flask, port 8000)

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Mac/Linux: source venv/bin/activate
pip install -r requirements.txt
copy .env.example .env       # Mac/Linux: cp .env.example .env  (then set SECRET_KEY)
python main.py
```

**Frontend** (React + Vite, port 3000), in a second terminal

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000 and log in with `tamid` / `swef2026` (hardcoded in `backend/credentials.py`).

## How it works

- `POST /api/auth/login` checks the username/password against `backend/credentials.py`. If they match, it returns a JWT signed with `SECRET_KEY`. If not, it returns 401.
- `GET /api/auth/me` is protected by the `require_auth` decorator. It returns 401 unless the request has `Authorization: Bearer <token>` with a valid, unexpired token signed by this server.
- The landing page shows nothing until `/api/auth/me` returns 200. On 401 it clears the token and redirects to `/login`. A fake or edited token in localStorage doesn't get you in, because the server checks the signature.

## Testing

- Backend (curl): a correct login returns a token. A wrong password, an unknown user, or an empty body returns 401. `/me` returns 200 with a real token, and 401 with no header, a garbage token, a token signed with the wrong secret, or an expired token.
- Browser: going to `/landing` while logged out redirects to `/login`. A wrong password shows an error and stays on `/login`. A correct login goes to `/landing`. A fake token in localStorage gets a 401 and redirects to `/login`. Log out clears the token. `/` redirects to `/login`.
