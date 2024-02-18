import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'

function App() {
 return (
  <>
   <Routes>
    <Route path="login" element={<Login />} />
    <Route path="sign-up" element={<SignUp />} />
   </Routes>
  </>
 )
}

export default App
