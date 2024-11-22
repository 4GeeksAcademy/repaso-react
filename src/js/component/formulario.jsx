import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Formulario = () => {
    const {store, actions} = useContext(Context)
    const [inputValue, setInputValue] = useState('lola'); // genera renderizados cada vez que se modifica

    const [data, setData] = useState({
        email: store.selected?.email || '',
        phone: store.selected?.phone || '',
        name: store.selected?.name || '',
        address: store.selected?.address || ''
    });


    const handleChange = e => {
        const { name, value } = e.target;
        //setInputValue(value);
        setData({ ...data, [name]: value });
    }


    const handleSubmit = e => {
        e.preventDefault();
        store.selected.name? 
        actions.editContact(data) 
        : 
        actions.addNewContact(data)
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <input type="text" value={inputValue} onChange={e=>setInputValue(e.target.value)} /> */}
            <input type="text" name="name" placeholder="name" value={data.name} onChange={handleChange} />
            <input type="text" name="phone" placeholder="phone" value={data.phone} onChange={handleChange} />
            <input type="text" name="email" placeholder="email" value={data.email} onChange={handleChange} />
            <input type="text" name="address" placeholder="address" value={data.address} onChange={handleChange} />
            <input type="submit" value={'send'}/>
        </form>
    )
}