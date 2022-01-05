import React, { useState } from 'react'
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';
import { Dialog } from '@mui/material';
import { InputLabel } from '../Input';

const now = moment().minutes(0).seconds(0).add(1, "hours")
const nowPlus1 = now.clone().add(1, "hours")

export const CalendarModal = () => {

    const [dateStart, setDateStart] = useState(now.toDate())
    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())

    const [formValues, setFormValues] = useState({
        title: "Evento",
        notes: "",
        start: now.toDate(),
        end: nowPlus1.toDate()
    });

    const { title, notes } = formValues;

    const handleInputChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    const handleStartDateChange = (e) => {
        setDateStart(e)
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleEndDateChange = (e) => {
        setDateEnd(e)
        setFormValues({
            ...formValues,
            start: e
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault()
        console.log(formValues);
    }

    return (
        <Dialog
            open={true}
            onClose={() => console.log("Cerrando")}
        >
            <div className="modal__container">
                <h2>Nuevo evento</h2>
                <form
                    onSubmit={handleSubmitForm}
                    className="modal__form">
                    <span>Fecha inicio</span>
                    <DateTimePicker
                        name="startDate"
                        onChange={handleStartDateChange}
                        value={dateStart}
                        className="modal__custom-input"
                    />
                    <span>Fecha Fin</span>
                    <DateTimePicker
                        name="endDate"
                        onChange={handleEndDateChange}
                        value={dateEnd}
                        className="modal__custom-input"
                        minDate={dateStart}
                    />
                    <div className="modal__title-notes">
                        <InputLabel
                            name="title"
                            placeholder="Titulo del evento"
                            type="text"
                            size="small"
                            label="Titulo y notas"
                            value={title}
                            onChange={handleInputChange}
                        />
                        <h3 className="text-xs -mt-1 mb-2">Descripcion breve</h3>
                        <textarea
                            className="modal__custom-input"
                            type="text"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
                            value={notes}
                            onChange={handleInputChange}
                        ></textarea>
                        <h3 className="text-xs -mt-1">Información adicional</h3>
                    </div>
                    <button className="modal__save-button btn">
                        <i className="fas fa-save mr-2"></i>
                        <span>Guardar</span>
                    </button>
                </form>
            </div>
        </Dialog>
    )
}