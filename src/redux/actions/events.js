import toast from "react-hot-toast"
import { fetchConToken } from "../../helpers/fetch"
import { prepareEvents } from "../../helpers/prepareEvents"
import { types } from "../types/types"

export const eventStartAddNew = (event) => {

    return async(dispatch,getState) => {

        const {id,name} = getState().auth

        try {
            const res = await fetchConToken("events",event,'POST')

            const body = await res.json();
            console.log(body);
            if(body.ok){
                event._id = body.data.id
                event.userId = body.data.userId
                event.user = {name:body.data.user.name}
                console.log(event);
                dispatch(eventAddNew(event))
                toast.success("Evento creado con exito")
            }
            else{
                toast.error(body.msg)
            }
        } catch (error) {
            toast.error("Something went wrong :/")
            console.error(error);
        }

    }
}

export const eventStartLoading = () => {

    return async(dispatch) => {

        try {
            
            const res = await fetchConToken('events')
            const body = await res.json()

            if(body.ok){
                const eventos = prepareEvents(body.eventos);
                console.log(eventos);
                dispatch(eventLoaded(eventos))
            }

        } catch (error) {
            console.error(error);
        }

    }
}

export const eventStartUpdate = (event) => {

    return async(dispatch) => {

        try {
            const bodyEvent = {
                end:event.end,
                start:event.start,
                title:event.title,
                notes:event.notes
            }
            const res = await fetchConToken(`events/${event.id}`,bodyEvent,'PUT')
            const body = await res.json()
                
            if(body.ok){
                dispatch(eventUpdate(event))
                toast.success("Evento actualizado")
            }

            else{
                toast.error(body.msg)
            }

        } catch (error) {
            toast.error("Somethign went wrong :/")
            console.error(error);
        }

    }

}

export const eventStartDelete = () => {

    return async (dispatch,getState) => {

        const {id} = getState().calendar.activeEvent

        try {
            
            const res = await fetchConToken(`events/${id}`,{},'DELETE')
            const body = await res.json()
                
            if(body.ok){
                dispatch(eventDelete(id))
                toast.success("Evento eliminado")
            }

            else{
                toast.error(body.msg)
            }

        } catch (error) {
            console.log(error);
            toast.error("somethign went wrong :/")
        }

    }
}

const eventLoaded = (events) => ({
    type:types.eventLoaded,
    payload:events
})

const eventAddNew = (event) => {
    return {
        type:types.eventAddNew,
        payload:event
    }
}

export const eventSetActive = (event) => {
    return {
        type:types.eventSetActive,
        payload:event
    }
}

export const eventCleanActiveNote = () => {
    return {
        type:types.eventCleanActiveNote
    }
}

export const eventUpdate = (event) => {
    return {
        type:types.eventUpdate,
        payload:event
    }
}

export const eventDelete = (id) =>{
    return {
        type:types.eventDeleted,
        payload:id
    }
}