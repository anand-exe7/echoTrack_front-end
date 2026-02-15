import Navbar from './components/Navbar'
import Footer from './components/Footer'
import DashboardPage from './pages/dashboard/page'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-900 selection:bg-indigo-500/30">
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
