import React from 'react'
import { Input } from '../../components/Input'

export const Register = () => {
    return (
        <section className="auth__main-auth-screen">
            <form className="auth__form auth__form-register">
                <h2>Register</h2>
                <div className="auth__input-container">
                    <Input
                        name="name"
                        placeholder="Full name"
                        type="text"
                        size="small"
                    />
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
                    <Input
                        name="password2"
                        placeholder="Confirm password"
                        type="password"
                        size="small"
                    />
                </div>
                <button className="btn btn-primary">
                    Create Account
                </button>
            </form>
        </section>
    )
}
