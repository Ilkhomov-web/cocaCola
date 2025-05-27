
import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'

function App(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
