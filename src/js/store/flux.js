const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contactos: []
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			agregarContacto: (nombre, mail, telefono, direccion) => {
				//Objeto con la informacion que queremos enviar en el fetch
				let datos = {
					full_name: nombre,
					email: mail,
					agenda_slug: "Ricardo",
					address: direccion,
					phone: telefono
				};
				//ESTA ES LA URL DONDE SE VA HACER EL POST, CON SU RESPECTIVA CONFIGURACION (METODO,CUERPO,TIPO DE DATO)
				fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					// ESTAS SON LAS PROMESAS (CONVIERTEN JSON Y MUESTRAN POR CONSOLA)
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/Ricardo")
					.then(response => response.json())
					.then(data => setStore({ contactos: data }))
					.catch(error => console.log(error));
			},
			borrarContactos: id => {
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "DELETE",
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			},
			editarContacto: (nombre, mail, telefono, direccion, id) => {
				let datos = {
					full_name: nombre,
					email: mail,
					agenda_slug: "Ricardo",
					address: direccion,
					phone: telefono
				};
				//ESTA ES LA URL DONDE SE VA HACER EL POST, CON SU RESPECTIVA CONFIGURACION (METODO,CUERPO,TIPO DE DATO)
				fetch("https://playground.4geeks.com/apis/fake/contact/" + id, {
					method: "PUT",
					body: JSON.stringify(datos),
					headers: { "Content-Type": "application/json" }
				})
					// ESTAS SON LAS PROMESAS (CONVIERTEN JSON Y MUESTRAN POR CONSOLA)
					.then(response => response.json())
					.then(data => console.log(data))
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
