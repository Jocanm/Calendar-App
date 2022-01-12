import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { startLogout } from '../redux/actions/auth'

export const Navbar = () => {

    const {name} = useSelector(state=>state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(startLogout())
    }

    return (
        <div className="layout__navbar">
            <h2 className="capitalize">{name}</h2>
            <button onClick={handleLogout} className="btn">
                <i className="fas fa-sign-out-alt mr-2"></i>
                Logout
            </button>
        </div>
    )
}
