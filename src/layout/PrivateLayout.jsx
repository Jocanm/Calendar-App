import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const PrivateLayout = () => {

    const { id } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(()=>{
        if(!id){
            navigate("/auth/login")
        }
    },[id,navigate])

    return (
        <div className="w-full h-full">
            <Navbar />
            <Outlet />
        </div>
    )

}
