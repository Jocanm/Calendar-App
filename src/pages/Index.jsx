import React, { useState } from 'react'
import moment from 'moment'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import { CalendarEvent } from '../components/calendar/CalendarEvent';
import { messages } from '../helpers/calendar-messages';
import 'moment/locale/es'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { CalendarModal } from '../components/calendar/CalendarModal';

moment.locale('es')
const localizer = momentLocalizer(moment)

const myEventsList = [
    {
        title: 'Cumpleaños del jefe',
        start: moment().toDate(),
        end: moment().add(2,"hours").toDate(),
        notes:"Comprar el pastel",
        user:{
            _id:"123",
            name:"Jose Angarita"
        }
    }
]

export const Index = () => {

    const [lastView,setLastView] = useState(localStorage.getItem('lastView') || 'month');

    const onDoubleClick = (e) => {
        console.log(e);
    }

    const onSelectEvent = (e) => {
        console.log(e);
    }

    const onViewChange = (e) => {
        localStorage.setItem("lastView",e)
        setLastView(e);
    }

    const eventStyleGetter = (event,start,end,isSelected) => {
        const style = {
            backgroundColor:'#367cf7',
            borderRadius:'0px',
            opacity:0.8,
            display: 'block',
            color:'white'
        }

        return {
            style
        }
    }

    return (
        <div className="calendar__main-screen">
            <Calendar
                localizer={localizer}
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                messages={messages}
                eventPropGetter={ eventStyleGetter }
                components={{
                    event:CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelectEvent}
                onView={onViewChange}
                view={lastView}
            />

            <CalendarModal/>
        </div>
    )
}
