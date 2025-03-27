import { BrowserRouter, Routes, Route }  from "react-router-dom";

import Mainpage from "./components/mainpage/mainpage";
import Animedisplay from "./components/Animedisplay/animedisplay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Mainpage  />} />
        <Route path="/anime/:id" element={<Animedisplay />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
