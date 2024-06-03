import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Products from './pages/Products'
import Footer from './components/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path = "/" element = {<Products></Products>}> </Route>
        <Route path = "/cart" element = {<Cart></Cart>}> </Route>

        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App