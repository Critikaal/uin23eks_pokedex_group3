import { Route, Routes } from 'react-router-dom'
import Teams from './components/Teams'
import Home from './components/Home'

function App() {
  return (
    <>
  <Home>
      <Routes>
        <Route path='/Teams' element={<Teams/>}/>
      </Routes>
  </Home>
  </>
  )
}

export default App
