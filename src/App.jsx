import { useState } from 'react'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import { Landing } from './pages/landing'
import { CreateUser } from './pages/CreateUser'
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
     <Route path='/' element={<Landing></Landing>}></Route>
     <Route path='/create/user' element={<CreateUser></CreateUser>}></Route>
     </Routes>
     
     </BrowserRouter>
  
    </>
  )
}

export default App
