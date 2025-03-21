import { useGlobalContext } from "./context/global"

function App() {

  const value = useGlobalContext();
  console.log(value);
  
  return (
    <>
      
    </>
  )
}

export default App
