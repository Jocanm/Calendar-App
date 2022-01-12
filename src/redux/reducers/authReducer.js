import { types } from "../types/types";

const initialState = {

    autenticado: false,
    // uid:null,
    // name:null

}

export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.authLogin:
            return {
                ...state,
                autenticado: true,
                    ...action.payload
            }

            default:
                return state;
    }

}