// Where the Flask backend lives. Override with VITE_API_URL in frontend/.env if needed.
export const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:8000'

const TOKEN_KEY = 'access_token'

// We store the JWT the server gave us. This is NOT "being logged in" by itself:
// the token only works because the backend checks its signature on every request.
// Editing or faking it in localStorage gets you a 401, not access.
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const setToken = (token) => localStorage.setItem(TOKEN_KEY, token)
export const clearToken = () => localStorage.removeItem(TOKEN_KEY)
