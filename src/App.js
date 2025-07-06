import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Page/home";
import Login from "./Page/Login";
import Register from "./Page/Register";
import Visit from "./Page/Visit/Visit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/visit" element={<Visit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
