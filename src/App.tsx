
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ArchivedPage from "./pages/Archived/Archived.page"
import HomePage from "./pages/Home/Home.page"

function App() {

  return (
    <main className="container m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/archived" element={<ArchivedPage />} />
        </Routes>
      </BrowserRouter>
    </main>

  )
}

export default App
