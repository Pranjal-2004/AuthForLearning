import React, { FC } from 'react'
import Home from './Components/Home/Home';
import  Login  from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminLogin from './Components/Admin/AdminLogin';
import StudentLogin from './Components/StudentLogin/StudentLogin';
import StudentSignup from './Components/StudentSignup/StudentSignup';
import CClogin from './Components/CClogin/CClogin';
import CCrequest from './Components/CCRequest/CCrequest';
import Dashboard from './Components/Dashboard/Dashboard';
import './App.css'

const App: FC = () => {

  return (
    <React.Fragment>
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/login" Component={Login}/>
        <Route path="/register" Component={SignUp}/>
        <Route path="/login/admin" Component={AdminLogin}/>
        <Route path="/login/user" Component={StudentLogin}/>
        <Route path="/register/user" Component={StudentSignup}/>
        <Route path="/login/cc" Component={CClogin} />
        <Route path="/register/cc" Component={CCrequest} />
        <Route path="/u/dashboard" Component={ Dashboard} />
      </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
