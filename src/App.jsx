import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Cases from './components/Cases'
import Insights from './components/Insights'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Cases />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
