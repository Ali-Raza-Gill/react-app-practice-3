import './App.scss'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import 'bootstrap/dist/js/bootstrap.bundle'
import Header from './Components/Header'
import Home from "./pages/home"

import Footer from './Components/Footer'
import Cards from './pages/Cards'

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Cards/>
      <Footer />
    </>
  )
}

export default App;
