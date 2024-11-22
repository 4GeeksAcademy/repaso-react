import React, { useContext, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Formulario } from "../component/formulario.jsx";
import { Context } from "../store/appContext.js";
import { Tarjeta } from "../component/tarjeta.jsx";

export const Home = () => {

	const { store, actions } = useContext(Context)



	return (
		<div className="text-center mt-5">
			<Formulario />

			{
				store.contacts?.map(el => <Tarjeta key={el.id} cid={el.id} name={el.name} email={el.email} phone={el.phone} address={el.address} />)
			}

		</div>
	);
}