import GradientCircle from "./components/GradientCircle";
import Form from "./components/Form";

function App() {

  return (
    <>
      <div className="h-screen font-[Nunito_Sans] w-screen flex items-center bg-[#1F1F1F]">
        <GradientCircle top={0} right={0} />
        <GradientCircle bottom={0} left="-10%" />
        <Form />
      </div>
    </>
  )
}

export default App
