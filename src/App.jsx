import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { PrivateLayout } from './layout/PrivateLayout'
import { Login } from './pages/auth/Login'
import { Register } from './pages/auth/Register'
import { Index } from './pages/Index'
import './style/style.scss'

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PrivateLayout/>}>
                    <Route path="" element={<Index />} />
                </Route>
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />
                <Route
                    path="*"
                    element={
                        <main className="text-5xl w-full h-screen flex justify-center items-center" style={{ padding: "1rem" }}>
                            <p className="bg-red-500 text-white p-3 rounded-lg">There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </Router>
    )
}

export default App
