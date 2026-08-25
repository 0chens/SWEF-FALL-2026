# Session 05 Homework: Login with Server-Side Auth
Build a small website with a login page and a protected landing page. The login check must happen on the backend, not only in React.

Goal
Create two pages:

Login page (/login) — username and password inputs, submit button
Landing page (/landing) — shown only after a successful login (welcome message, image, etc.)
If someone types localhost:3000/landing without logging in, they should be sent back to /login.

Important rule: server-side auth
Checking the password in React alone is not enough.

Your backend must:

Verify username/password on login

Protect at least one API route that the landing page calls

Return 401 Unauthorized if the user is not logged in

The frontend can redirect for UX, but security lives on the server.


# Coding stack

# Frontend
React + Vite (recommended, you can use whatever you want)
port 3000

# Backend
Flask
port 8000



What to build
Backend (backend/)
Create auth routes (e.g. in backend/routes/auth.py).

1. Hardcode credentials in a backend file (we haven't learned databases yet so do this for now)

2. POST /api/auth/login

Accept JSON: { "username": "...", "password": "..." }
If credentials match → return { "access_token": "...", "token_type": "bearer" }
If not → return 401 with an error message
3. GET /api/auth/me (protected)

Requires header: Authorization: Bearer <token>
If valid token → return { "message": "Welcome!" } (or similar)
If missing/invalid token → return 401
4. Register your blueprint in main.py:

app.register_blueprint(auth_bp, url_prefix="/api/auth")
Tip: Look at backend/routes/users.py for JWT helpers (create_access_token, require_auth). You can reuse that pattern.

Frontend (frontend/)

# 1. Login.jsx

input username + password

On submit → POST /api/auth/login
Success → save token, go to /landing
Failure → show error, stay on login

# 2. Landing.jsx

On load → call GET /api/auth/me with the token
If 200 → show welcome content
If 401 → redirect to /login

# 3. App.jsx

Route /login → Login
Route /landing → Landing
Route / → redirect to /login


What NOT to do
Don’t check the password only in React
Don’t use if (isLoggedIn) in React as your only protection
Don’t put the password in frontend code
Don’t treat localStorage.setItem('loggedIn', 'true') as authentication

# how we will check your work. 
Submit your work by putting it in this activity's hw folder. We will check it following the below criteria. This activity should not be difficult, with AI you should be able to do it in 45-60 minutes. Look at tayak or tamidchatmatcher in prereading if you want examples of how the login page should work

<img width="493" height="173" alt="image" src="https://github.com/user-attachments/assets/827739be-f0ee-457c-9f8f-741dead2bfb6" />
