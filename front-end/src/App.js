// import logo from './logo.svg';
// import './App.css';
// import React from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Home from "./components/home";
import Characters from "./components/characters";
import Locations from "./components/locations";
import Episodes from "./components/episodes";
import { BrowserRouter } from "react-router-dom";

// const sectionUrl = `https://rickandmortyapi.com/api/`;


function App() {

  return <div>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/characters" element={<Characters />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </div>;
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
