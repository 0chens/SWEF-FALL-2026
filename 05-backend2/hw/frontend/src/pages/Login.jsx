import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_BASE, setToken } from '../api'

export default function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault() // stop the browser from reloading the page
    setError('')
    setLoading(true)

    try {
      // Send what the user typed to the backend. The SERVER decides if it's correct.
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })
      const data = await res.json().catch(() => ({}))

      if (!res.ok) {
        setError(data.error || 'Login failed')
        return
      }

      setToken(data.access_token)
      navigate('/landing')
    } catch {
      setError('Could not reach the server. Is the backend running on port 8000?')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="page">
      <form className="card" onSubmit={handleSubmit}>
        <h1>Log in</h1>

        <label>
          Username
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            autoComplete="username"
            required
          />
        </label>

        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </label>

        {error && <p className="error" role="alert">{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? 'Logging in…' : 'Log in'}
        </button>
      </form>
    </main>
  )
}
