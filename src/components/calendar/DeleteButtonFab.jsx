import React from 'react'
import toast from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import { eventDelete } from '../../redux/actions/events'
import { uiCloseModal } from '../../redux/actions/ui'

// TENGO QUE VER ELIMINAR EVENTO

export const DeleteButtonFab = () => {

    const dispatch = useDispatch()
    const { activeEvent } = useSelector(state => state.calendar)

    const handleDeleteEvent = () => {
        dispatch(eventDelete())
        dispatch(uiCloseModal())
        toast.success("Evento eliminado correctamente")
    }

    if (activeEvent) {
        return (
            <button 
            onClick={handleDeleteEvent}
            className="modal__delete-button btn">
                <i className="fas fa-trash-alt mr-2"></i>
                <span>Borrar</span>
            </button>
        )
    }

    return <></>

}
