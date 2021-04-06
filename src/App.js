import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts)

    if (parsedContacts) {
      this.setState({contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  addContact = (name, number) => {
    const contactName = [];
    this.state.contacts.map(contact => contactName.push(contact.name.toLowerCase()))

    const newContact = {
      id: shortid.generate(),
      name,
      number,
    }   
  
    if (contactName.includes(name.toLowerCase())) {
      return alert(`${name} is alredy in contacts`)
    } else {
      this.setState(({ contacts }) => ({
          contacts: [newContact, ...contacts]
    }))
    }
  }

  changeFilter = (e) => {
    this.setState({
      filter: e.currentTarget.value
    })
  }

  showFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  render() {
    
    const { filter } = this.state;
    const filteredContacts = this.showFilteredContacts();
    return (
      <>
        <div className="section">
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact}/>

          <p>Contacts</p>

          <Filter
            value={filter}
            onChange={this.changeFilter}
          />

          <ContactList
            contacts={filteredContacts}
            deleteContact={this.deleteContact}
          />
        </div>
      </>
    )
  }
};

export default App;