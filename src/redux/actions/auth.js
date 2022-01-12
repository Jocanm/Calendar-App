import toast from "react-hot-toast";
import { fetchSinToken } from "../../helpers/fetch"
import { toastStyle } from "../../helpers/toastStyle";
import { types } from "../types/types";
import { uiFinishLoading, uiStartLoading } from "./ui";
// test
export const startLogin = ({email,password}) =>{

    return async(dispatch) => {

        dispatch(uiStartLoading())

        const res = await fetchSinToken("auth/login",{email,password},'POST');

        const body = await res.json();
        
        if(body.ok){
            const {token,name,id,email} = body.user
            localStorage.setItem('token',token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(login({id,name,email}))
            dispatch(uiFinishLoading())
            toast.success(`Welcome ${name}!`,toastStyle)
        }
        
        else{
            dispatch(uiFinishLoading())
            toast.error(body.msg,toastStyle)
        }


    }
}

export const startRegister = ({name,email,password}) => {

    return async(dispatch) => {

        dispatch(uiStartLoading())

        const res = await fetchSinToken("auth/register",{email,password,name},'POST');

        const body = await res.json();

        if(body.ok){
            const {token,name,id,email} = body.user
            localStorage.setItem('token',token)
            localStorage.setItem('token-init-date', new Date().getTime())
            dispatch(login({id,name,email}))
            dispatch(uiFinishLoading())
            toast.success(`Welcome ${name}!`,toastStyle)
        }

        else{
            dispatch(uiFinishLoading())
            toast.error(body.msg,toastStyle)
        }
    }

}   

const login = (user) => ({
    type:types.authLogin,
    payload:user
})