import { useState } from 'react'
import {Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar'
import About from './components/About';
import Newsletter from './components/Newsletter';
import Home from './components/Home';
import Error from './components/Error';
import SingleCockTail from './components/SingleCockTail';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<NavBar/>}>
            <Route index element={<Home/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='cocktails/:id' element={<SingleCockTail/>}/>
            <Route path='newsletter' element={<Newsletter/>}/>
            <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
