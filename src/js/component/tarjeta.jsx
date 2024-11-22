import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Modal } from "./modal.jsx";


export const Tarjeta = ({name, phone, email, address, cid}) => {

    const {store, actions} = useContext(Context);
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)

    const handleDelete = () => {
        actions.deleteContact(cid)
    }

    const handleEdit = () => {
        actions.selectToEdit(cid)
        setShow(true)
    }

    return (
        <>
        <div className="card">
            <h2>{name}</h2>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>address: {address}</p>
            <button className="btn btn-danger" onClick={handleDelete}>delete</button>
            <button className="btn btn-success" onClick={handleEdit}>edit</button>
        </div>
       {show && <Modal close={handleClose} />}
        </>
    )
} 