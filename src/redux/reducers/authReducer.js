import { types } from "../types/types";

const initialState = {

    autenticado: false,
    checking:true
    // uid:null,
    // name:null

}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                ...action.payload,
                autenticado: true,
                checking:false
            }
        
        case types.authUnAuthenticated:
            return {
                ...state,
                autenticado: false,
                checking:false
            }

        case types.authLogout:
            return {
                autenticado:false,
                checking:false
            }

        default:
            return state;
    }

}