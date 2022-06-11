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
import { MusicianDescription } from './Pages/MusicianDescription/MusicianDescription'
import { PaymentAccepted } from './Pages/PaymentAccepted/PaymentAccepted'
import { PaymentRefused } from './Pages/PaymentRefused/PaymentRefused'
import { CreateAccountMusician } from './Pages/CreateAccountMusician/CreateAccountMusician'
import { CreateAccountUser } from './Pages/CreateAccountUser/CreateAccountUser'
import { UserProfile } from './Pages/UserProfile/UserProfile '

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login/client" element={<Login />} />
                <Route path="/login/musican" element={<LoginMusician />} />
                <Route
                    path="/crearcuenta/cliente"
                    element={<CreateAccountUser />}
                />
                <Route
                    path="/crearcuenta/musican"
                    element={<CreateAccountMusician />}
                />
                <Route path="/login" element={<InicioSesion />} />
                <Route
                    path="/crearcuenta/payment/execute-payment"
                    element={<Payment />}
                />
                <Route
                    path="/musician/description"
                    element={<MusicianDescription />}
                />
                <Route path="/payment/accepted" element={<PaymentAccepted />} />
                <Route path="/payment/refused" element={<PaymentRefused />} />
                <Route path="/crearcuenta" element={<CreateAccount />} />
                <Route path="/userprofile" element={<UserProfile />} />
            </Routes>
        </div>
    )
}

export default App
