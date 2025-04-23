import React from 'react'

export default function ProfileCard({ profile }) {
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md w-full max-w-md">
      <div className="flex items-center gap-4">
        <img
          src={profile.avatar_url}
          alt="avatar"
          className="w-20 h-20 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{profile.name || profile.login}</h2>
          <p className="text-gray-600">{profile.bio}</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm text-gray-700">
        <span>Repositórios: {profile.public_repos}</span>
        <span>Seguidores: {profile.followers}</span>
      </div>
      <a
        href={profile.html_url}
        target="_blank"
        className="mt-4 inline-block text-blue-600 hover:underline"
      >Ver no GitHub</a>
    </div>
  )
}