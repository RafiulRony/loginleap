import React from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import Signin from "./components/Signin";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App(){
  console.log("okay");
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />}  />
      <Route path="/signup" element={<Signin />}  />
     {/* <Login/> */}

    </Routes>    
    </BrowserRouter>
  )
}


// return (
//     <div>
//       {/* <Login/> */}
//       {/* <Signin/> */}
//       <Router>
//       <Switch>
//         <Route exact path="/login" component={Login} />
        
//       </Switch>
//     </Router>
//     </div>
//   )