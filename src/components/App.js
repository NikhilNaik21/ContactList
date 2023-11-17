import React from 'react'
import LoginForm from './LoginForm'
import { useAppContext } from './AppContext';
import ContactManager from './ContactManager';

export default function App() {
  const { state } = useAppContext();
  const { isLoggedIn } = state;
  return (
    <div>
    {isLoggedIn ? (
      <>
       {/* <h1>Welcome to the App!</h1> */}
      <ContactManager />
      </>
    ) : (
     <LoginForm />
    
    )}
  </div>
  )
}
