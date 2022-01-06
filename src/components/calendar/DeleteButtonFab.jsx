import React from 'react'
import { useSelector } from 'react-redux'

export const DeleteButtonFab = () => {

    const { activeEvent } = useSelector(state => state.calendar)

    if (activeEvent) {
        return (
            <button className="modal__delete-button btn">
                <i className="fas fa-trash-alt mr-2"></i>
                <span>Borrar</span>
            </button>
        )
    }

    return <></>

}
