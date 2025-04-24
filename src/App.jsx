
import React, { useState } from "react";
import Search from "./components/Search.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import Loading from "./components/Loading.jsx";

export default function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(username) {
    setError("");
    setProfile(null);

    if (!username) {
      setError("Digite um nome de usuário");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error(
          "Nenhum perfil foi encontrado com esse nome de usuário. Tente novamente."
        );
      }

      const data = await response.json();
      setProfile(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#1F1F1F] flex justify-center items-center p-4 h-full">
      <div id="first-gradient"></div>
      <div id='second-gradient'></div>
      <div id='third-gradient' className="absolute left-[16%] top-[6%] inset-0 z-10 max-h-[230px] h-full max-w-[230px] w-full bg-[#1f1f1f] bg-[radial-gradient(#272727_3px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className='flex flex-col items-center gap-6 p-4 sm:p-10 sm:mx-[15%] sm:max-w-6xl w-full min-w-[60vw] h-full min-h-[70vh] z-20 bg-black'>
        <div className='flex justify-center items-center gap-2 py-2 px-4 ' >
          <img className='md:h-[60px]  h-[40px] ' src="/logo.svg" alt="Logo do GitHub." />
          <span className='hidden sm:block text-white font-semibold text-4xl md:text-6xl'>Perfil</span>
          <img className='hidden sm:block h-[30px] md:h-[50px]' src="/github.svg"  />
        </div>
        <Search onSearch={handleSearch} />
        {loading && <Loading />}
        {error && <div className='content-center bg-[#D9D9D9] mt-4 h-[90px] max-w-[800px] w-full rounded-lg'>
          <p className="  md:text-xl font-normal max-w-107 text-center text-[#FF0000] mx-auto">{error}</p>
        </div>}
        {profile && <ProfileCard profile={profile} />}
      </div>
    </div>
  );
}
