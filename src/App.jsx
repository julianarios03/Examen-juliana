import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/helpers/Header';
import Main from './components/helpers/Main';
import Footer from './components/helpers/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      
<Header/>
<Main/>
<Footer/>


    </section>
  )
}

export default App
