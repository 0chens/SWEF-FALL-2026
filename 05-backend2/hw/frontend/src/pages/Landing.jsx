import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { API_BASE, clearToken, getToken } from '../api'
import heroImg from '../assets/hero.png'

export default function Landing() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    const token = getToken()
    if (!token) {
      // No token at all: skip the request and go straight to login (UX only;
      // the real protection is that /api/auth/me returns 401 without a valid token).
      navigate('/login', { replace: true })
      return
    }

    const controller = new AbortController()

    fetch(`${API_BASE}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
      signal: controller.signal,
    })
      .then(async (res) => {
        if (res.status === 401) {
          clearToken() // token is fake, expired, or tampered with
          navigate('/login', { replace: true })
          return
        }
        if (!res.ok) throw new Error(`Server error ${res.status}`)
        setUser(await res.json())
      })
      .catch((err) => {
        if (err.name !== 'AbortError') setError('Could not reach the server.')
      })

    return () => controller.abort() // cancel if we leave the page mid-request
  }, [navigate])

  function handleLogout() {
    clearToken()
    navigate('/login', { replace: true })
  }

  if (error) return <main className="page"><p className="error">{error}</p></main>
  if (!user) return <main className="page"><p>Checking your login…</p></main>

  return (
    <main className="page">
      <section className="card landing">
        <img src={heroImg} alt="" width="170" height="179" />
        <h1>{user.message}</h1>
        <p>You only see this page because the server verified your token.</p>
        <button onClick={handleLogout}>Log out</button>
      </section>
    </main>
  )
}
