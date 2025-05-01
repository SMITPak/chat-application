import './App.css'
import { SignUp } from './component/Auth/signUp'
import { MainLayout } from './pageLayout'
import { Route, Routes } from 'react-router'

function App() {

  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<SignUp />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
