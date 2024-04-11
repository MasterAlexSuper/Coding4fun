import './App.css'
import About from './conmponents/About/About'
import { Form } from './conmponents/Form/Form'
import Header from './conmponents/Header/Header'
import Price from './conmponents/Price/Price'
import Services from './conmponents/Services/Services'
import Works from './conmponents/Works/Works'

function App() {

  return (
    <>
      <Header />
      <Form />
      <Services />
      <About />
      <Price />
      <Works />
    </>
  )
}

export default App
