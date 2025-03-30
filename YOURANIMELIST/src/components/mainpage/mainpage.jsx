import { useState } from "react";

import AiringPage from "../Airingpage/airingpage";
import PopularPage from "../PopularPage/popularpage";
import { useGlobalContext } from "../../globalcontext/global";

export default function Mainpage() {
  const { handleChange, handleSubmit, searchQuery, search } = useGlobalContext() 
  const [rendered, setRendered] = useState("Airing");

  function switchComponent() {
    switch (rendered) {
      case "Airing":
        return <AiringPage rendered={rendered}/>;
      case "Popular":
        return <PopularPage rendered={rendered}/>;
      default:
        return <AiringPage />;
    }
  }
  
  return (
    <div>
      <button onClick={() => setRendered("Airing")}>Airing</button>
      <button onClick={() => setRendered("Popular")}>Popular</button>
      <form>
        <input type="text" placeholder="Search" value={search} onChange={handleChange}/>
        <button type="submit" onClick={handleSubmit}></button>
      </form>
      {switchComponent()}
    </div>
  )
}