import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const userID = {
    name: '',
    lastname: '',
    typeClient: '',
    imagenusuario: '',
    secondlastname: '',
}
//
const apiUrl = {
    apiUrl: 'https://tumusicoahora.herokuapp.com/',
    apiLocal: 'http://localhost:8080/',
}

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(userID)
    const [api, setApi] = useState(apiUrl)
    const setUserId = (user) => {
        setUser({
            name: user.name,
            // lastname: user.lastname,
            typeClient: user.type,
            imagenusuario: user.imagenusuario,
            //  secondlastname: user.secondlastname,
        })
    }
    return (
        <AppContext.Provider value={{ user, setUserId, api }}>
            {children}
        </AppContext.Provider>
    )
}
