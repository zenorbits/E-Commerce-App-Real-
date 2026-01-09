import { Route, Routes } from 'react-router-dom'
import GeneralPage from './components/general/GeneralPage'
import Loginform from './components/AuthPages/Loginform'
import RegisterForm from './components/AuthPages/RegisterForm'
import AdminDashboard from './components/admin/AdminDashboard'

const App = () => {
  return (
    <div className='font-mono h-screen w-screen overflow-x-hidden'>

      <Routes>
        <Route path='/' element={<GeneralPage />} />
        <Route path='/login' element={<Loginform />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App