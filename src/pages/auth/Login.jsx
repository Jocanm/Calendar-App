import React, { useEffect } from 'react'
import useFormData from '../../hooks/useFormData'
import ButtonLoading from '../../components/ButtonLoading'
import { Link, useNavigate } from 'react-router-dom'
import { Input } from '../../components/Input'
import { startLogin } from '../../redux/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { validateLogin } from '../../helpers/validateAuthForms'


export const Login = () => {

    const dispatch = useDispatch()
    const { form, formData, updateFormData } = useFormData()
    const { loading } = useSelector(state => state.ui)

    const handleSubmitRegister = (e) => {
        e.preventDefault()
        if (validateLogin(formData)) {
            dispatch(startLogin(formData))
        }
    }

    return (
        <section className="auth__main-auth-screen">
            <form
                onSubmit={handleSubmitRegister}
                ref={form}
                onChange={updateFormData}
                className="auth__form">
                <h2>Login</h2>
                <div className="auth__input-container">
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
                </div>
                <ButtonLoading disabled={Object.keys(formData).length === 0}  loading={loading} text="Submit" className="btn btn-primary bg-blue-600 btn-loading" />

                <Link to="/auth/register" className="mt-2 text-blue-600 font-bold">
                    Register
                </Link>
            </form>
        </section>
    )
}
