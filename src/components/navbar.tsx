
import { motion } from "framer-motion"
import { Button } from "./ui/button"

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm dark:bg-neutral-950/80"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            Portfolio
          </motion.div>
          <div className="hidden md:flex space-x-6">
            <Button variant="ghost" className="text-sm">Home</Button>
            <Button variant="ghost" className="text-sm">About</Button>
            <Button variant="ghost" className="text-sm">Projects</Button>
            <Button variant="ghost" className="text-sm">Testimonials</Button>
            <Button variant="default" className="text-sm">Contact</Button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}