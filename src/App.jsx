import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import TodoPage from './pages/TodoPage.jsx'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-mono">
        {/* Brutal Neo Header */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="relative border-b-4 border-lime-400 bg-gradient-to-r from-black via-gray-900 to-black"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/10 via-transparent to-cyan-400/10"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-8">
            <motion.h1 
              whileHover={{ scale: 1.02, textShadow: "0 0 20px #84cc16" }}
              className="text-6xl font-black tracking-tighter text-center"
              style={{
                background: 'linear-gradient(45deg, #84cc16, #06b6d4, #84cc16)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '0 0 30px rgba(132, 204, 22, 0.3)'
              }}
            >
              DARK.NEO.TASKS
            </motion.h1>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-2 bg-gradient-to-r from-lime-400 via-cyan-400 to-lime-400 mt-4 shadow-lg shadow-lime-400/50"
            ></motion.div>
          </div>
        </motion.header>

        {/* Main Content Area */}
        <main className="relative">
          {/* Background Effects */}
          <div className="fixed inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-96 h-96 bg-lime-400/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-lime-400/3 via-transparent to-transparent rounded-full blur-2xl"></div>
          </div>

          {/* Routes */}
          <div className="relative z-10">
            <Routes>
              <Route path="/" element={<TodoPage />} />
            </Routes>
          </div>
        </main>

        {/* Brutal Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="relative mt-20 border-t-4 border-lime-400 bg-gradient-to-r from-black via-gray-900 to-black"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 via-transparent to-cyan-400/5"></div>
          <div className="relative max-w-6xl mx-auto px-6 py-8">
            <div className="text-center">
              <motion.p 
                whileHover={{ scale: 1.05 }}
                className="text-lg font-bold tracking-wider text-lime-400 mb-2"
              >
                BRUTALISM × PRODUCTIVITY
              </motion.p>
              <div className="flex justify-center space-x-8 text-sm text-gray-400">
                <span className="border border-gray-700 px-3 py-1 bg-gray-900/50">DARK</span>
                <span className="border border-gray-700 px-3 py-1 bg-gray-900/50">NEO</span>
                <span className="border border-gray-700 px-3 py-1 bg-gray-900/50">BRUTAL</span>
              </div>
            </div>
          </div>
        </motion.footer>
      </div>
    </Router>
  )
}

export default App