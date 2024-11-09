import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./page/header/header";
import Home from "./page/home/home";
import Login from "./page/login/login";
import Sign_up from "./page/sign_up/sign_up";
import Friend from "./page/friend/friend";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign_up" element={<Sign_up />} />
          <Route path="/friend" element={<Friend />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
