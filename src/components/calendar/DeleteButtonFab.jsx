import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { eventStartDelete } from '../../redux/actions/events'
import { uiCloseModal } from '../../redux/actions/ui'

// TENGO QUE VER ELIMINAR EVENTO

export const DeleteButtonFab = () => {

    const dispatch = useDispatch()
    const { activeEvent } = useSelector(state => state.calendar)

    const handleDeleteEvent = () => {
        dispatch(eventStartDelete())
        dispatch(uiCloseModal())
    }

    if (activeEvent) {
        return (
            <button 
            type="button"
            onClick={handleDeleteEvent}
            className="modal__delete-button btn">
                <i className="fas fa-trash-alt mr-2"></i>
                <span>Borrar</span>
            </button>
        )
    }

    return <></>

}
