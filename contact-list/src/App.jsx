import { useState, useEffect } from 'react';
import './App.css'
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);


useEffect(() => {
  fetchContacts();
}, [])

const openCreateModal = () => {
  if(!isModalOpen) setIsModalOpen(true);
}

const openUpdateModal = () => {
  if(!isModalOpen) setIsModalOpen(true);
}

const closeModal = () => {
  setIsModalOpen(false);
}

const fetchContacts = async () => {
  const response = await fetch("http://127.0.0.1:5000/contacts")
  const data = await response.json();
  setContacts(data.contacts);
  console.log(data.contacts)
}


  return (
    <>
      <h1>Contact List</h1>
      <ContactList contacts={contacts}/>
      <button onClick={openCreateModal}>Create New Contact</button>
      { isModalOpen && <div className='modal'>
        <span className='close' onClick={closeModal}>&times;</span>
        <ContactForm/>
        </div>
      }
    </>
  )
}

export default App
