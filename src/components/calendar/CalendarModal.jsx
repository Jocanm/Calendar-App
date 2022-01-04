import { Dialog } from '@mui/material';
import React, { useState } from 'react'
import Modal from 'react-modal';
import { Input, InputLabel } from '../Input';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {


    return (
        <Dialog
            open={true}
            onClose={() => console.log("Cerrando")}
        >
            <div className="modal__container">
                <h2>Nuevo evento</h2>
                <form className="modal_form">
                    <InputLabel
                        name="startDate"
                        placeholder="Fecha Inicio"
                        type="text"
                        size="small"
                        label="Fecha y hora de inicio"
                    />
                    <InputLabel
                        name="endDate"
                        placeholder="Fecha Fin"
                        type="text"
                        size="small"
                        label="Fecha y hora de fin"
                    />
                    <div className="modal__title-notes">
                        <InputLabel
                            name="title"
                            placeholder="Titulo del evento"
                            type="text"
                            size="small"
                            label="Titulo y notas"
                        />
                        <h3 className="text-xs -mt-1 mb-2">Descripcion breve</h3>
                        <textarea
                            type="text"
                            placeholder="Notas"
                            rows="5"
                            name="notes"
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
