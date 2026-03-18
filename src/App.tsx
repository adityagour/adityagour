import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-dark-bg)] text-[var(--color-text-primary)] selection:bg-[var(--color-neon-purple)] selection:text-white relative">
      <style>{`
        .glow-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: radial-gradient(circle at 50% 0%, rgba(0, 243, 255, 0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 80%, rgba(188, 19, 254, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }
      `}</style>

      <div className="glow-overlay" />

      <Cursor />
      <Navbar />

      <main className="relative z-10 w-full">
        <Hero />
        <Projects />
        <About />
      </main>

    </div>
  )
}

export default App
