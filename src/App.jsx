import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DashboardPage from './pages/dashboard/page'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF5] selection:bg-[#4F772D]/30">
      <Navbar />
      
      {/* Grow ensures the footer stays at the bottom on short pages */}
      <main className="flex-grow">
        <DashboardPage />
      </main>

      <Footer />
    </div>
  )
}

export default App
