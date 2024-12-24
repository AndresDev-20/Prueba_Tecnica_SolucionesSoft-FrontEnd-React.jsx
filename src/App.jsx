import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home.jsx'
import UpdatePassword from './pages/Update/UpdatePassword.jsx'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/updatepassword' element={<UpdatePassword/>}/>
      </Routes>
    </div>
  )
}

export default App
