import { useState } from "react";

import GradientCircle from "./components/GradientCircle";

function App() {


  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState([]);

  function searchProfile() {
    if (username.length === 0) return;

    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setUserData(data);
        setUsername("");
      });
  }

  console.log(userData);
  console.log(username);

  return (
    <>
      <div className="h-screen flex items-center bg-[#1F1F1F]">
        <GradientCircle top={0} right={0} />
        <GradientCircle bottom={0} left="-10%" />
        <div className="flex flex-col relative m-[0_auto] bg-black text-white justify-start z-2 h-full max-w-289 w-full max-h-134.25">
          <div className="absolute top-0 left-0 w-full h-full z-2 bg-black"></div>
          <img className="absolute flex -top-[20%] -left-[8%] z-1" src="/dots.svg" alt="Dots" />
          <div className="flex flex-col z-3 items-center">
            <div className="flex items-center gap-2.75 mb-6.75 mt-10">
              <img className="h-14.5 w-14.5" src="/github-icon.png" alt="icon do github" />
              <h1 className="text-[60px] font-semibold ">Perfil</h1>
              <img className="w-40 h-11.25" src="/github-logo.png" alt="logo do github" />
            </div>
            <div className="border-white bg-white max-w-125.75 h-auto w-full flex justify-between border mb-8.25 rounded-[10px]" >
              <input className="bg-white w-full font-semibold px-4 text-black max-w-110.25 rounded-s-[10px]" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Digite um usuário do Github" />
              <button className="bg-[#005cff] cursor-pointer hover:bg-[#0041c4] flex justify-center items-center w-15.5 h-15.25 rounded-[10px]" onClick={searchProfile}>
                <img className="h-6.25 w-6.25" src="/search.png" alt="Lupa" />
              </button>
            </div>
            {userData && userData.status !== "404" ? (
              <article className="bg-[#d9d9d9] flex items-center rounded-[25px] py-5 px-8 gap-8 w-full max-w-201">
                <img className="h-55 w-55 object-cover rounded-full border-[#005cff] border-2" src={userData.avatar_url} alt={`Foto do avatar de ${userData.name}`} />
                <div className="">
                  <h2 className="font-bold text-[20px] mb-4 text-[#005cff] ">
                    {userData.name}
                  </h2>
                  <p className="font-light text-black text-[15px] max-w-md">
                    {userData.bio}
                  </p>
                </div>
              </article>
            ) : (
              userData && (
                <div className="bg-[#d9d9d9] rounded-[10px] px-25 py-4.25">
                  <h2 className="text-[20px] text-red-500 max-w-130 text-center">
                    Nenhum perfil foi encontrado com esse nome de
                    usuário. Tente novamente
                  </h2>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
