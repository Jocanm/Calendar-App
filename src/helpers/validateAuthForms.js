import toast from "react-hot-toast"
import { toastStyle } from "./toastStyle"

export const validateLogin = ({email,password}) =>{

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        toast.error("Please provide a valid email address",toastStyle)
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters",toastStyle)
        return false;
    }

    return true

}

export const validateRegister = ({email,password,password2,name}) => {

    if(!(/^[a-z ,.'-]+$/i.test(name))) {
        toast.error("Please provide a valid name",toastStyle)
        return false;
    }

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))){
        toast.error("Please provide a valid email address",toastStyle)
        return false;
    }

    if(password.length < 6){
        toast.error("Password must be at least 6 characters",toastStyle)
        return false;
    }

    if(password !== password2){
        toast.error("Passwords do not match",toastStyle)
        return false
    }

    return true;

}   