import React, { createContext, useState } from 'react'

export const AppContext = createContext()

const userID = {
    userId: '',
    typeClient: '',
}

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(userID)
    const setUserId = (user) => {
        setUser({
            userId: user,
        })
    }
    return (
        <AppContext.Provider value={{ user, setUserId }}>
            {children}
        </AppContext.Provider>
    )
}
