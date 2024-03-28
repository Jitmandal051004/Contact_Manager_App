import React from 'react'
import Navbar from './components/Navbar'
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';

function App() {
  const Contacts = [
    {
      id: "1",
      name: "jitu",
      email: "jitu@mail.com"
    },
    {
      "id": "2",
      "name": "alice",
      "email": "alice123@mail.com"
    },
    {
      "id": "3",
      "name": "bob",
      "email": "bob@emailprovider.com"
    },
    {
      "id": "4",
      "name": "sara",
      "email": "sara.example@mail.com"
    },
    {
      "id": "5",
      "name": "mike",
      "email": "mike6789@domain.com"
    },
    {
      "id": "6",
      "name": "emma",
      "email": "emma_doe@emailservice.com"
    }
  ];

  return (
    <div className='bg-[#184452] min-h-screen w-full'>
      <Navbar />
      <AddContact />
      <ContactList />
    </div>
  )
}

export default App