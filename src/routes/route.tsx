import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages";
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<>Not found</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
