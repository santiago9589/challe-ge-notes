import { BrowserRouter, Routes, Route } from "react-router-dom"
import ArchivedPage from "./pages/Archived/Archived.page"
import HomePage from "./pages/Home/Home.page"
import ContextProvider from "../context/ContextProvider"

function App() {

  return (
    <main className="container m-auto">
      <ContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/archived" element={<ArchivedPage />} />
          </Routes>
        </BrowserRouter>
      </ContextProvider>
    </main>

  )
}

export default App
