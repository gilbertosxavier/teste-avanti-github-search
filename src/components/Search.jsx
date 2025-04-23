import React, { useState } from 'react'

export default function Search({ onSearch }) {
  const [input, setInput] = useState('')
  return (
    <div className="w-full max-w-md flex">
      <input
        type="text"
        className="flex-grow p-2 border rounded-l-lg focus:outline-none"
        placeholder="Digite o username no GitHub"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
        onClick={() => onSearch(input.trim())}
      >
        Buscar
      </button>
    </div>
  )
}