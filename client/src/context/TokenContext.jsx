import { createContext, useContext, useEffect, useState } from "react";

export const TokenContext = createContext()

export const TokenContextProvider =({children})=>{
    const [token, setToken] = useState(localStorage.getItem("token"))
    const [user, setUser] = useState(null)
    const authorization = `Bearer ${token}`
    const [isDark, setIsDark] = useState(false)

    const storeToken = (token)=>{
        localStorage.setItem("token", token)
        setToken(token)
    }
    const removeToken = ()=>{
        localStorage.removeItem("token")
        setToken('')
    }
    const isLogout = !token

    const userAuthentication = async()=>{
        if(!token){
            return setUser(null)
        }
        try {
            const response = await fetch(`http://localhost:4000/api/user`,{
                method: "GET",
                headers:{
                    Authorization: authorization
                }
            })
            if(response.ok){
                const data = await response.json()
                setUser(data.userData)
            }else{
                setUser(null)
               console.error("Authentication failed:", response.status);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        userAuthentication()
    },[token])
    return (
        <TokenContext.Provider value={{isLogout, storeToken, removeToken, user, authorization, isDark, setIsDark }}>
            {children}
        </TokenContext.Provider>
    )
}

export const useTokenContext =()=>{
    return useContext(TokenContext)
}