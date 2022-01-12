import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ButtonLoading from '../../components/ButtonLoading'
import { Input } from '../../components/Input'
import { validateRegister } from '../../helpers/validateAuthForms'
import useFormData from '../../hooks/useFormData'
import { startRegister } from '../../redux/actions/auth'

export const Register = () => {

    const dispatch = useDispatch()
    const { form, formData, updateFormData } = useFormData()
    const {loading} = useSelector(state => state.ui)

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        if(validateRegister(formData)){
            dispatch(startRegister(formData))
        }
    }

    return (
        <section className="auth__main-auth-screen">
            <form 
            ref= {form}
            onChange={updateFormData}
            onSubmit={handleSubmitRegister}
            className="auth__form auth__form-register">
                <h2>Register</h2>
                <div className="auth__input-container">
                    <Input
                        required={false}
                        name="name"
                        placeholder="Full name"
                        type="text"
                        size="small"
                    />
                    <Input
                        required={false}
                        name="email"
                        placeholder="Email"
                        type="text"
                        size="small"
                    />
                    <Input
                        required={false}
                        name="password"
                        placeholder="Password"
                        type="password"
                        size="small"
                    />
                    <Input
                        required={false}
                        name="password2"
                        placeholder="Confirm password"
                        type="password"
                        size="small"
                    />
                </div>
                <ButtonLoading loading={loading} disabled={Object.keys(formData).length === 0} text="Create Account" className="btn btn-primary bg-blue-600 btn-loading"/>
                <Link to="/auth/login" className="mt-2 text-blue-600 font-bold">
                    Login
                </Link>
            </form>
        </section>
    )
}
