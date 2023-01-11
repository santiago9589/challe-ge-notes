import React from "react"
import { Routes, Route } from "react-router-dom"
import ArchivedPage from "./pages/Archived/Archived.page"
import HomePage from "./pages/Home/Home.page"
import ContextProvider from "../context/ContextProvider"
import { useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import ModalComponent from "./components/ModalComponent"
import ContextProviderModal from "../context/ContextProviderModal"


function App() {

  const location = useLocation()

  return (
    <main className="container m-auto p-8">
      <ContextProvider>
        <ContextProviderModal>
          <ModalComponent />
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.key}>
              <Route path="/" element={<HomePage />} />
              <Route path="/archived" element={<ArchivedPage />} />
            </Routes>
          </AnimatePresence>
        </ContextProviderModal>
      </ContextProvider>
    </main>

  )
}

export default App
