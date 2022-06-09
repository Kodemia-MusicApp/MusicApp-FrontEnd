import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { LandingPage } from './Pages/LandingPage/LandingPage'
import { CreateAccount } from './Pages/CreateAccount/CreateAccount'
import { InicioSesion } from './Pages/InicioSesion/InicioSesion'
import { LoginMusician } from './Pages/LoginMusician/LoginMusician'
import { Payment } from './Pages/Payment/Payment'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login/client" element={<Login />} />
                <Route path="/login/musican" element={<LoginMusician />} />
                <Route
                    path="/crearcuenta/cliente"
                    element={<CreateAccount />}
                />
                <Route
                    path="/crearcuenta/musican"
                    element={<CreateAccount />}
                />
                <Route path="/login" element={<InicioSesion />} />
                <Route
                    path="/crearcuenta/payment/execute-payment"
                    element={<Payment />}
                />
            </Routes>
        </div>
    )
}

export default App
