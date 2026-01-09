import { Route, Routes } from 'react-router-dom'
import GeneralPage from './components/general/GeneralPage'
import RegisterForm from './components/AuthPages/RegisterForm'
import AdminDashboard from './components/admin/AdminPage'
import Loginform from './components/AuthPages/LoginForm'

const App = () => {
  return (
    <div className='font-mono h-screen w-screen overflow-x-hidden'>

      <Routes>
        
        <Route path='/' element={<GeneralPage />} />
        <Route path='/login' element={<Loginform />} />
        <Route path='/register' element={<RegisterForm />} />
        <Route path='/admin/*' element={<AdminDashboard />} />
      </Routes>
    </div>
  )
}

export default App