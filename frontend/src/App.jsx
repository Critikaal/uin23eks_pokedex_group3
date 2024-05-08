import { Route, Routes } from 'react-router-dom'
import Teams from './components/Teams'
import Team from './components/Team'
import Pokemons from './components/Pokemons'
import Type from './components/Type'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <>
  <Pokemons>
      <Routes>
        <Route path='/' element={<Pokemons/>}/>
        <Route path='/Teams' element={<Teams/>}/>
      </Routes>
  </Pokemons>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <Pokemon></Pokemon>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <Type></Type>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <Teams></Teams>
  <br /><br /><br /><br /><br /><br /><br /><br /><br />
  <Team></Team>
  </>
  )
}

export default App
