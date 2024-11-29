import React, {lazy} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';



const Home = lazy(()=> import("./pages/Home"));
const Login = lazy(()=> import("./pages/Login"));
const Chat = lazy(()=> import("./pages/Chat"));
const Grpups = lazy(()=> import("./pages/Groups"));


const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/chat/:chatid" element={<chat/>} />
        <Route path="/Groups" element={<chat/>} />
        <Route path="/Login" element={<Login/>} />


      </Routes>
    </BrowserRouter>
  )
}

export default App