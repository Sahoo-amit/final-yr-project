import { createContext, useContext, useState } from "react";

export const TokenContext = createContext()

export const TokenContextProvider =({children})=>{
    const [token, setToken] = useState()

    const storeToken = (token)=>{
        localStorage.setItem("token", token)
        setToken(token)
    }
    const removeToken = ()=>{
        localStorage.removeItem("token")
        setToken('')
    }
    const isLogout = !token
    return (
        <TokenContext.Provider value={{isLogout, storeToken, removeToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export const useTokenContext =()=>{
    return useContext(TokenContext)
}