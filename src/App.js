import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from "./LandingPage";
import './App.css'
import HomePage from "./HomePage/HomePage";
import NavBar from "./Navbar/NavBar"
import Porftolio from "./Portfolio/Porftolio";
function App() {
  const [displayPages, setDisplayPages] = useState(false)

  setTimeout(() => { setDisplayPages(true) }, 4000)

  return (
    <Router>

      <div className="App">

        {
          displayPages ?
            <>
              <NavBar />
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/portfolio' element={<Porftolio />} />
              </Routes>
            </>


            : <><LandingPage /></>
        }
      </div>
    </Router>
  );
}

export default App;
