import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const userID = {
    userId: '',
    typeClient: '',
}

const apiUrl = {
    apiUrl: 'https://tumusicoahora.herokuapp.com/',
}

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(userID)
    const [api, setApi] = useState(apiUrl)
    const setUserId = (user) => {
        setUser({
            userId: user,
        })
    }
    return (
        <AppContext.Provider value={{ user, setUserId, api }}>
            {children}
        </AppContext.Provider>
    )
}
