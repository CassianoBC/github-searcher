    export default function Card({name, avatar_url, bio}) {
    return (
        <article className="bg-[#d9d9d9] mb-9.25 flex flex-col lg:flex-row items-center rounded-[25px] py-5 px-8 gap-8 w-full max-w-[90%] md:max-w-201">
            <img className="h-55 w-55 object-cover rounded-full border-[#005cff] border-2" src={avatar_url} alt={`Foto do avatar de ${name}`} />
            <div className="">
                <h2 className="font-bold text-[20px] text-center lg:text-start mb-4 text-[#005cff] ">
                    {name}
                </h2>
                <p className="font-light text-black text-[15px] max-w-md">
                    {bio}
                </p>
            </div>
        </article>
    )
}
