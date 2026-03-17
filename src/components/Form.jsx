import { useState } from "react";

import Overlay from "./Overlay";
import Error from "./Error";
import Card from "./Card";

export default function Form() {
    const [username, setUsername] = useState("");
    const [userData, setUserData] = useState(null);

    function searchProfile() {
        if (username.length === 0) return;

        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => {
                setUserData(data);
                setUsername("");
            });
    }

    return (
        <div className="flex flex-col relative m-[0_auto] bg-black text-white justify-start z-2 max-w-[90%] md:max-w-289 w-full ">
            <Overlay />
            <img className="absolute flex -top-[20%] -left-[8%] z-1" src="/dots.svg" alt="Dots" />
            <div className="flex flex-col z-3 items-center">
                <div className="flex items-center gap-1 sm:gap-2.75 mb-6.75 mt-10">
                    <img className="w-10 h-10 sm:h-14.5 sm:w-14.5" src="/github-icon.png" alt="icon do github" />
                    <h1 className="text-[30px] sm:text-[60px] font-semibold ">Perfil</h1>
                    <img className="w-23 sm:w-40 sm:h-11.25" src="/github-logo.png" alt="logo do github" />
                </div>
                <div className=" focus-within:border-blue-500 border-3 border-transparent transition-all bg-white max-w-[90%] md:max-w-125.75 h-auto w-full flex justify-between mb-8.25 rounded-[10px]" >
                    <input className="bg-white w-full outline-none font-semibold px-4 text-black max-w-110.25 rounded-s-[10px]" type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Digite um usuário do Github" />
                    <button className="bg-[#005cff] cursor-pointer hover:bg-[#0041c4] flex justify-center items-center w-full max-w-15.5 h-15.5 rounded-[10px]" onClick={searchProfile}>
                        <img className="h-6.25 w-6.25" src="/search.png" alt="Lupa" />
                    </button>
                </div>
                {userData && (
                    userData.status !== "404" ? (
                        <Card
                            name={userData.name === null ? userData.login : userData.name}
                            bio={userData.bio === null ? "Este usuário não possui uma bio." : userData.bio}
                            avatar_url={userData.avatar_url}
                        />
                    ) : (
                        <Error />
                    )
                )}
            </div>
        </div>
    )
}
