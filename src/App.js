import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// import { Login } from './Pages/Login/Login'
// import { LandingPage } from './Pages/LandingPage/LandingPage'
// import { MusicianDescription } from './Pages/MusicianDescription/MusicianDescription'
import { Landing2 } from './Pages/Landing2/Landing2'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing2 />} />
                {/* <Route path="/" element={<LandingPage />} /> */}
                {/* <Route path="/login/client" element={<Login />} />
                <Route path="/login/musican" element={<Login />} />
                <Route path="/musician-description" element={<MusicianDescription />} /> */}
            </Routes>
        </div>
    )
}

export default App
