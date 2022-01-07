import React, { useState } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { CalendarEvent } from '../components/calendar/CalendarEvent';
import { messages } from '../helpers/calendar-messages';
import { useDispatch, useSelector } from 'react-redux';
import { CalendarModal } from '../components/calendar/CalendarModal';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'moment/locale/es'
import { uiOpenModal } from '../redux/actions/ui';
import { eventCleanActiveNote, eventSetActive } from '../redux/actions/events';
import { ButtonFab } from '../components/calendar/ButtonFab';

moment.locale('es')
const localizer = momentLocalizer(moment)

export const Index = () => {

    const dispatch = useDispatch()
    const { events: eventsList } = useSelector(state => state.calendar)
    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        dispatch(eventSetActive(e))
        dispatch(uiOpenModal())
    }
    

    const handleSelectSlot = () =>{
        dispatch(eventCleanActiveNote())
    }   

    const onViewChange = (e) => {
        localStorage.setItem("lastView", e)
        setLastView(e);
    }

    const eventStyleGetter = (event, start, end, isSelected) => {
        const style = {
            backgroundColor: '#f98fe9',
            borderRadius: '0px',
            opacity: 0.8,
            display: 'block',
            color: 'white',
        }

        return {
            style
        }
    }

    return (
        <div className="calendar__main-screen">
            <Calendar
                localizer={localizer}
                events={eventsList}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onSelectSlot={ handleSelectSlot }
                selectable={true}
                onDoubleClickEvent={onDoubleClick}
                // onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
            />
            <ButtonFab />
            <CalendarModal />
        </div>
    )
}
