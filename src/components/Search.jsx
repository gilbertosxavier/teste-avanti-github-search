import React, { useState } from 'react'

export default function Search({ onSearch }) {
  const [input, setInput] = useState('')
  return (
    <div className="relative w-full max-w-lg flex flex-col">
      <input
        type="text"
        className="bg-white mx-auto w-full h-full px-2 sm:max-h-[62px] p-2 sm:p-[28px] text-xl font-semibold border-[#DDDDDD]placeholder:text-xl placeholder:font-semibold placeholder:text-black  placeholder:text-xs rounded-lg focus:outline-none"
        placeholder="Digite um usuário do GitHub"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button
        className="bg-[#005CFF] absolute right-0 top-0 cursor-pointer text-white h-11 w-11 sm:h-[62px] sm:w-[62px] rounded-lg hover:bg-blue-700"
        onClick={() => onSearch(input.trim())}
      >
        <img className='h-[25px] mx-auto' src="search-icon.svg" />
      </button>
    </div>
  )
}