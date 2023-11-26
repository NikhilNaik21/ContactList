import React from 'react'
import { useAppContext } from './AppContext';
import AppRouter from './AppRouter';
export default function App() {
    const { state } = useAppContext();
    const { isLoggedIn } = state;
  return (
  //   <div>
    
  //   {isLoggedIn ? (
  //     <>
  //      {/* <h1>Welcome to the App!</h1> */}
  //     <ContactManager />
  //     </>
  //   ) : (
  //    <LoginForm />
    
  //   )}

  // </div>

  <AppRouter isLoggedIn={isLoggedIn} />
  )
}
