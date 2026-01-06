import { Route, Routes } from 'react-router-dom'
import GeneralPage from './components/general/GeneralPage'
import Loginform from './components/AuthPages/Loginform'
import RegisterForm from './components/AuthPages/RegisterForm'

const App = () => {
  return (
    <div className='font-mono h-screen w-screen overflow-x-hidden'>

      <Routes>
      <Route path = '/' element={<GeneralPage/>} />
      <Route path = '/login' element={<Loginform/>}/>
      <Route path = '/register' element={<RegisterForm/>}/>
      </Routes>
    </div>
  )
}

export default App