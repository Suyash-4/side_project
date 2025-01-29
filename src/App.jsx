import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Edudel from "./Pages/Edudel";
import Home from "./Pages/Home";
import Udise from "./Pages/Udise";
import Edulife from "./Pages/Edulife";


const App = () => {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <>
      <nav className="text-emerald-600 flex justify-between p-5">
        <h1 className="underline text-xl font-extrabold">Grouped Page</h1>
        <ul className="flex flex-col justify-between gap-[10px] font-extrabold underline">
          <li>
            <Link to="/" className="text-2xl">Home</Link>
          </li>
          <li>
            <Link to="/edudel" className="text-2xl">Edudel</Link>
          </li>
          <li>
            <Link to="/udise" className="text-2xl">Udise+</Link>
          </li>
          <li>
            <Link to="/edulife" className="text-2xl">Edulife</Link>
          </li>
        </ul>
      </nav>



      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edudel" element={<Edudel />} />
          <Route path="/udise" element={<Udise />} />
          <Route path="/edulife" element={<Edulife />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
