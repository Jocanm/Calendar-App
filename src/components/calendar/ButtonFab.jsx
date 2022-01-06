import React from 'react'
import { useDispatch } from 'react-redux'
import { eventCleanActiveNote } from '../../redux/actions/events'
import { uiOpenModal } from '../../redux/actions/ui'

export const ButtonFab = () => {

    const dispatch = useDispatch()

    const handleNewEvent = (e) => {
        dispatch(eventCleanActiveNote())
        dispatch(uiOpenModal())
    }

    return (
        <button
            onClick={handleNewEvent}
            className="button__floating">
            <i className="fa fa-plus"></i>
        </button>
    )
}
