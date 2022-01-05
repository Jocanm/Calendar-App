import React from 'react'
import { Login } from './pages/auth/Login'
import { Index } from './pages/Index'
import { store } from './redux/store/store'
import { Register } from './pages/auth/Register'
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux'
import { PrivateLayout } from './layout/PrivateLayout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/style.scss'

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path="/" element={<PrivateLayout />}>
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
            <Toaster />
        </Provider>
    )
}

export default App
