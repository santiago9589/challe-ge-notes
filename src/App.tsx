import { BrowserRouter, Routes, Route } from "react-router-dom"
import ArchivedPage from "./pages/Archived/Archived.page"
import HomePage from "./pages/Home/Home.page"
import ContextProvider from "../context/ContextProvider"
import { useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

function App() {

  const location = useLocation()

  return (
    <main className="container m-auto">
      <ContextProvider>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route path="/" element={<HomePage />} />
              <Route path="/archived" element={<ArchivedPage />} />
            </Routes>
          </AnimatePresence>
      </ContextProvider>
    </main>

  )
}

export default App
