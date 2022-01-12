import React, {useEffect} from 'react'
import { Outlet } from 'react-router-dom'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import Loading from '../components/LoadingView'

export const PublicLayout = () => {

    const { id } = useSelector(state => state.auth)
    const navigate = useNavigate()

    useEffect(() => {
        if(id){
            navigate("/")
        }
    },[id,navigate])

    if(id){
        return <Loading/>
    }

    return <Outlet/>
}
