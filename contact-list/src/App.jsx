import { useState, useEffect } from 'react';
import './App.css'
import ContactList from './ContactList';
import ContactForm from './ContactForm';

function App() {
  const [contacts, setContacts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentContact, setCurrentContact] = useState({});


useEffect(() => {
  fetchContacts();
}, [])

const openCreateModal = () => {
  if(!isModalOpen) setIsModalOpen(true);
}

const openEditModal = (contact) => {
  if(isModalOpen) return
  setCurrentContact(contact);
  setIsModalOpen(true);
}

const closeModal = () => {
  setIsModalOpen(false);
  setCurrentContact({});
}

const fetchContacts = async () => {
  const response = await fetch("http://127.0.0.1:5000/contacts")
  const data = await response.json();
  setContacts(data.contacts);
}

const onUpdate = () => {
  closeModal();
  fetchContacts();
}


  return (
    <>
      <h1>Contact List</h1>
      <ContactList contacts={contacts} updateContact={openEditModal} updateCallBack={onUpdate}/>
      <button onClick={openCreateModal}>Create New Contact</button>
      { isModalOpen && <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={closeModal}>&times;</span>
            <ContactForm existingContact={currentContact} updateCallBack={onUpdate} />
          </div>
        </div>
      }
    </>
  )
}

export default App
