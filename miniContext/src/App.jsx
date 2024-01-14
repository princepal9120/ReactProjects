import { useState } from 'react'

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
 

  return (
    <UserContextProvider>
    <h1 className='bg-black text-blue-100 px-4 py-2' >context api</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
