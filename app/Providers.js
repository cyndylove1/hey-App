'use client'
import nextAuth from "next-auth"
import { SessionProvider } from "next-auth/react"

export const AuthProvider = ({children })=>{
    return <SessionProvider>{children}</SessionProvider>

}