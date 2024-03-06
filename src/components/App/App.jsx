import { useEffect, useState } from "react";

import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";

import css from "./App.module.css";

function App() {
  const [nameFilter, setNameFilter] = useState("");

  const [contacts, setContats] = useState(() => {
    const savedContact = window.localStorage.getItem("saved-contact");
    if (savedContact !== null) {
      return JSON.parse(savedContact);
    }
    return [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ];
  });

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const addContact = (newContact) => {
    setContats((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (userId) => {
    setContats((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== userId);
    });
  };

  const onChange = (e) => {
    setNameFilter(e.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <>
      <div>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAdd={addContact} />
        <SearchBox value={nameFilter} onChange={onChange} />
        <ContactList items={visibleContacts} onDelete={deleteContact} />
      </div>
    </>
  );
}

export default App;
//test