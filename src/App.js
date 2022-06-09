import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { LandingPage } from './Pages/LandingPage/LandingPage'
import { CreateAccount } from './Pages/CreateAccount/CreateAccount'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login/client" element={<Login />} />
                <Route path="/login/musican" element={<Login />} />
                <Route
                    path="/crearcuenta/cliente"
                    element={<CreateAccount />}
                />
                <Route
                    path="/crearcuenta/musican"
                    element={<CreateAccount />}
                />
            </Routes>
        </div>
    )
}

export default App
