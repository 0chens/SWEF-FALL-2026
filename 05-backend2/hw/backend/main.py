from dotenv import load_dotenv

# Load .env BEFORE importing routes, because routes/auth.py reads
# SECRET_KEY from the environment as soon as it is imported.
load_dotenv()

from flask import Flask  # noqa: E402
from flask_cors import CORS  # noqa: E402

from routes.auth import auth_bp  # noqa: E402

app = Flask(__name__)

# Allow the React dev server (port 3000) to call this API (port 8000).
CORS(app, origins=["http://localhost:3000"])

app.register_blueprint(auth_bp, url_prefix="/api/auth")


@app.get("/api/health")
def health_check():
    return {"status": "ok"}


if __name__ == "__main__":
    app.run(port=8000, debug=True)
