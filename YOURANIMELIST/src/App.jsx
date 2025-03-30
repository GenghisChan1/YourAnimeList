import { BrowserRouter, Routes, Route }  from "react-router-dom";

import Mainpage from "./components/mainpage/mainpage";
import Animedisplay from "./components/Animedisplay/animedisplay";
import AnimeCharacterDisplay from "./components/AnimeCharacterdisplay/animeCharacterdisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage  />} />
        <Route path="/anime/:id" element={<Animedisplay />} />
        <Route path="/character/:characterId" element={<AnimeCharacterDisplay />} />
        <Route path="/VA/:personId" element={<AnimeCharacterDisplay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
