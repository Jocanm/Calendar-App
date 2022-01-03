import React from 'react'
import { Input } from '../../components/Input'

// TENGO QUE VER 5.LOGIN SCREEN


export const Login = () => {
    return (
        <section className="auth__main-auth-screen">
            <form className="auth__form">
                <h2>Login</h2>
                <div className="auth__input-container">
                    <Input
                    name="email"
                    placeholder="Email"
                    type="text"
                    size="small"
                    />
                    <Input
                    name="password"
                    placeholder="Password"
                    type="password"
                    size="small"
                    />
                </div>
                <button className="btn btn-primary">
                    Submit
                </button>
            </form>
        </section>
    )
}
