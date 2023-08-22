import './App.scss'
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from './Components/Header'
import Home from "./pages/home"
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Footer />
    </>
  )
}

export default App;
