import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home1 from "./Home/Home";

function App() {
  return ( 
    <div>
        <Routes>
          <Route path="/:category/:shuffle" element={<Home1 />} /> 
          <Route path="/" element={<Navigate to="/animal/0" replace />} />
        </Routes>
    </div>
   );
}

export default App;