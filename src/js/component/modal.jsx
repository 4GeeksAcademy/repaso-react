import React, { useContext, useState } from "react";
import { Formulario } from "./formulario.jsx";
import { Context } from "../store/appContext.js";

export const Modal = ({close}) => {
    const {actions} = useContext(Context)

    const handleClose = () => {
        actions.clearSelected()
        close()
    }

    return (
        <div className="bg-dark text-white" style={{
            position: 'absolute',
            top: '40%',
            left: '30%',
            zIndex: 99,
            width: '400px',
            height: '200px'
            }}>
        <button onClick={handleClose}> cerrar</button>
            <Formulario />
        
        </div>
    )
}