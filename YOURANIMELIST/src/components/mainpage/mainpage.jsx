import { useState } from "react";

import AiringPage from "../Airingpage/airingpage";
import PopularPage from "../PopularPage/popularpage";
import SearchResults from "../SearchRes/searchResults";
import { useGlobalContext } from "../../globalcontext/global";

export default function Mainpage() {
  const { handleChange, handleSubmit, search } = useGlobalContext() 
  const [rendered, setRendered] = useState("Airing");

  function switchComponent() {
    switch (rendered) {
      case "Airing":
        return <AiringPage rendered={rendered}/>;
      case "Popular":
        return <PopularPage rendered={rendered}/>;
      case "Search":
          return <SearchResults rendered={rendered} />;
      default:
        return <AiringPage />;
    }
  }
  
  function handleSearchSubmit(event) {
    handleSubmit(event);  // ✅ Pass the event
    setRendered("Search");  // ✅ Updates the component
  }

  return (
    <div>
      <button onClick={() => setRendered("Airing")}>Airing</button>
      <button onClick={() => setRendered("Popular")}>Popular</button>
      <form onSubmit={handleSearchSubmit}> {/* ✅ Submit handler here */}
        <input type="text" placeholder="Search" value={search} onChange={handleChange} />
        <button type="submit">Search</button> {/* ✅ No onClick needed */}
      </form>
      {switchComponent()}
    </div>
  )
}