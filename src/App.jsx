import GradientCircle from "./components/GradientCircle";

function App() {
  return (
    <>
      <div className="h-screen flex items-center bg-[#1F1F1F]">
        <GradientCircle top={0} right={0} />
        <GradientCircle bottom={0} left="-10%" />
        <div className="flex relative m-[0_auto] bg-black text-white flex-col items-center justify-center z-2 h-full max-w-289 w-full max-h-134.25">
          <div className="absolute top-0 left-0 w-full h-full z-2 bg-black"></div>
          <img className="absolute flex -top-[20%] -left-[8%] z-1" src="/dots.svg" alt="Dots" />
          <div className="flex flex-col z-3 items-center">
            <h1>Perfil Github</h1>
            <form className="bg-gray-200">
              <input type="text" placeholder="Digite um usuário do Github" />
              <button>
                <img src="/search.png" alt="Lupa" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
