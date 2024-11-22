const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
			selected: {}
		},
		actions: {
			// Use getActions to call a function within a fuction
			clearSelected: (id)=> {
				setStore({selected: {}})
			},
			selectToEdit: (id)=> {
				const store = getStore()
				setStore({selected: store.contacts.filter(el=> el.id === id)[0]})
			},
			editContact: async (contact) => {
				try {
					//method PUT
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe/contacts/'+getStore().selected.id, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					console.log(resp)
					if (!resp.ok) throw new Error('Error fetching data')
					getActions().fetchData();
				} catch (error) {
					console.error(error)
				}
			},

			deleteContact: async  (id) => {
				try {
					//method DELETE
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe/contacts/'+id, {
						method: 'DELETE'
					})
					
					if (!resp.ok) throw new Error('Error fetching data')
					getActions().fetchData();
				} catch (error) {
					console.error(error)
				}
			},
			addNewContact: async (contact) => {
				try {
					//method POST
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe/contacts', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contact)
					})
					console.log(resp)
					if (!resp.ok) throw new Error('Error fetching data')
					getActions().fetchData();
				} catch (error) {
					console.error(error)
				}
			},
			fetchData: async () => {
				try {
					//method GET
					const resp = await fetch('https://playground.4geeks.com/contact/agendas/pepe/contacts')
					console.log(resp)
					if (resp.status!==200) throw new Error('Error fetching data') 
					if (!resp.ok) throw new Error('Error fetching data')
					const data = await resp.json()
					setStore({contacts: data.contacts})				
				} catch (error) {
					console.error(error)
				}
			},
			sum: (a,b) => a+b,
			addContactToStore: (contact) => {
				setStore({contacts: [...getStore().contacts, contact]})
			}
		}
	};
};

export default getState;
