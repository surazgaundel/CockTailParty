import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import About from './components/About';
import Newsletter from './components/Newsletter';
import Home from './components/Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='newsletter' element={<Newsletter/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
