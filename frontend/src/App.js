import React from "react";
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

import {ToastContainer} from 'react-toastify'
import Menu from "./components/header/Menu";
import Home from "./components/common/Home";
import Pnf from "./components/common/Pnf";

function App() {
  return (
  <Router>
  <Menu/>
    <ToastContainer autoClose={4000} position={'top-left'}/>
    <Routes>
      <Route path={`/`} element={<Home/>}/>
      <Route path={`/*`} element={<Pnf/>}/>
    </Routes>
  </Router>
  );
}

export default App;
