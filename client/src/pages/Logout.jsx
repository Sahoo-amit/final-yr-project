import { useEffect } from "react"
import { useTokenContext } from "../context/TokenContext"
import { Navigate } from "react-router-dom"

const Logout = () => {
  const {removeToken} = useTokenContext()
  useEffect(()=>{
    removeToken()
  },[])
  Navigate('/')
  return null
}

export default Logout