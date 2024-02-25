import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SignUp from './pages/Signup'
import { routerUser } from './routers/router'

function App() {
 return (
  <>
   <Routes>
    <Route path="login" element={<Login />} />
    <Route path="sign-up" element={<SignUp />} />

    {routerUser.map((route, index) => {
     return (
      <Route
       key={index}
       path={route.path}
       element={
        <>
         <route.layout>
          <route.element />
         </route.layout>
        </>
       }></Route>
     )
    })}
   </Routes>
  </>
 )
}

export default App
