import React, { useEffect } from 'react'
import Loading from './components/LoadingView';
import { Login } from './pages/auth/Login'
import { Index } from './pages/Index'
import { Toaster } from 'react-hot-toast';
import { Register } from './pages/auth/Register'
import { PrivateLayout } from './layout/PrivateLayout'
import { useDispatch, useSelector } from 'react-redux'
import { startChecking } from './redux/actions/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style/style.scss'
import { PublicLayout } from './layout/PublicLayout';

// TENGO QUE VER 10. AÑADIR UID

const App = () => {

    const dispatch = useDispatch()
    const { checking } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch(startChecking())
    }, [dispatch])

    if (checking) {
        return (
            <Loading />
        )
    }

    return (
        <Router>
            <Routes>

                <Route path="/" element={<PrivateLayout />}>
                    <Route path="" element={<Index />} />
                </Route>

                <Route path="/auth" element={<PublicLayout />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>

                <Route
                    path="*"
                    element={
                        <main className="text-5xl w-full h-screen flex justify-center items-center" style={{ padding: "1rem" }}>
                            <p className="bg-red-500 text-white p-3 rounded-lg">There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
            <Toaster/>
        </Router>
    )
}

export default App
