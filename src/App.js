import Home from "./Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Category from "./components/Category/Category";

function App() {
  return ( 
    <div>
        <Routes>
          <Route path="/:category/:shuffle" element={<Home />} /> 
          <Route path="/" element={<Navigate to="/animal/0" replace />} />
        </Routes>
    </div>
   );
}

export default App;