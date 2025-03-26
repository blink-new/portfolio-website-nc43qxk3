
import { Navbar } from "./components/navbar"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { Testimonials } from "./components/testimonials"
import { Contact } from "./components/contact"

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
    </div>
  )
}

export default App