import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import DashboardPage from "./pages/dashboard/page"
import Landing from "./pages/Landing"

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF5] selection:bg-[#4F772D]/30">
      
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </main>

      
    </div>
  )
}

export default App
