import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Login } from './Pages/Login/Login';
import { useAuth0 } from "@auth0/auth0-react";
import { MainPage } from './Pages/MainPage/MainPage';
import { RoutesData } from './Routes/Routes';
import { MainRouters } from './MainRouters/MainRouters';
// import MainPage from './Pages/MainPage/MainPage';
function App() {
  const { loginWithRedirect } = useAuth0();
  return (
    <>
    {/* <Login/> */}

    {/* <MainPage/> */}
    <MainRouters array={RoutesData}/>
    {/* <button onClick={() => loginWithRedirect()}>Log In</button>; */}
    </>
  );
}

export default App;
