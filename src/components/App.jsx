import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactList from '../components/ContactList/ContactList';
import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter/Filter';
import css from '../components/App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    if (this.isDublicate({ name, number })) {
      return alert(`${name} is already in contacts`);
    }
    this.setState(prevState => {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  isDublicate({ name, number }) {
    const { contacts } = this.state;
    const normalizedName = name.toLowerCase();
    const normalizedNumber = number.toLowerCase();
    const dublicate = contacts.find(contact => {
      return (
        contact.name.toLowerCase() === normalizedName &&
        contact.number.toLowerCase() === normalizedNumber
      );
    });

    return Boolean(dublicate);
  }

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    const result = contacts.filter(({ name }) => {
      return name.toLowerCase().includes(normalizedFilter);
    });

    return result;
  };

  handleChange = event => {
    this.setState({
      filter: event.target.value,
    });
  };

  render() {
    return (
      <div className={css.wrapper}>
        <div className={css.contact__form}>
          <h1>PhoneBook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div className={css.contact}>
          <h2>Contacts</h2>
          <Filter
            onChange={this.handleChange}
            filterValue={this.state.filter}
          />
          {this.state.contacts.length !== 0 && (
            <ContactList
              deleteContacts={this.deleteContact}
              filterContacts={this.getFilteredContacts()}
            />
          )}
        </div>
      </div>
    );
  }
}
export default App;
