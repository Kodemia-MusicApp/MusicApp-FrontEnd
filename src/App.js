import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Pages/Login/Login'
import { LandingPage } from './Pages/LandingPage/LandingPage'

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login/client" element={<Login />} />
                <Route path="/login/musican" element={<Login />} />
            </Routes>
        </div>
    )
}

export default App
