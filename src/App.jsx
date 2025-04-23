import React, { useState } from 'react'
import Search from './components/Search.jsx'
import ProfileCard from './components/ProfileCard.jsx'
import Loading from './components/Loading.jsx'

export default function App() {
  const [username, setUsername] = useState('')
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSearch = async (user) => {
    setError('')
    setProfile(null)
    if (!user) return setError('Digite um nome de usuário')
    setLoading(true)
    try {
      const res = await fetch(`https://api.github.com/users/${user}`)
      if (!res.ok) throw new Error('Usuário não encontrado')
      const data = await res.json()
      setProfile(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">GitHub Profile Search</h1>
      <Search onSearch={handleSearch} />
      {loading && <Loading />}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {profile && <ProfileCard profile={profile} />}
    </div>
  )
}