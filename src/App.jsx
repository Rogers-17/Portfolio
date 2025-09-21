import "./App.css"
import About from "./components/About"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from './components/Navbar'
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
    </>
  )
}

export default App
