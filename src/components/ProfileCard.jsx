import React from 'react'

export default function ProfileCard({ profile }) {
  return (
    <div className="mt-6 bg-[#D9D9D9] p-5 rounded-lg shadow-md w-full max-w-3xl">
      <div className="flex flex-col sm:flex-row items-center gap-8 ">
        <img
          src={profile.avatar_url}
          alt="avatar"
          className="h-30 md:h-55 rounded-full border border-[#005CFF]"
        />
        <div>
          <h2 className="text-lg md:text-xl text-[#005CFF] font-bold">{profile.name || profile.login}</h2>
          
          {profile.bio?.trim() ?
          ( <p className="text-black text-[15px] font-light ">{profile.bio}</p> ) :
          ( <p className="text-black text-[15px] font-light italic ">Essa pessoa não possui informações inseridas na seção BIO.</p> )}
         
        </div>
      </div>

    </div>
  )
}