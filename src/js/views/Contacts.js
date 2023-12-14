import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";
import { Context } from "../store/appContext.js";
import { Editar } from "../component/Editar.jsx";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false,
		id: undefined
	});

	const [edit, setEdit] = useState({
		showModal: false,
		id: undefined
	});
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.obtenerContactos();
	}, []);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
				<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
					<ul className="list-group pull-down" id="contact-list">
						{store.contactos.map((items, index) => (
							<ContactCard
								key={items.id}
								name={items.full_name}
								email={items.email}
								phone={items.phone}
								address={items.address}
								id={items.id}
								onDelete={() => setState({ showModal: true, id: items.id })}
								onEdit={() => setEdit({ showModal: true, id: items.id })}
							/>
						))}
					</ul>
				</div>
			</div>
			<Modal show={state.showModal} id={state.id} onClose={() => setState({ showModal: false })} />
			<Editar show={edit.showModal} id={edit.id} onClose={() => setEdit({ showModal: false })} />
		</div>
	);
};
