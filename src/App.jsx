import './App.css'
import TailwindExample from './TailwindExample'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to your second React App!</h1>
        <p>This is a simple React component.</p>
      </header>
      
      <main className="app-main">
        {/* Traditional CSS Section */}
        <div className="traditional-cards">
          <section className="card">
            <h2>What is React?</h2>
            <p>React is a JavaScript library for building user interfaces.</p>
          </section>
          <section className="card">
            <h2>What is a Component?</h2>
            <p>A component is a reusable piece of code that returns HTML.</p>
          </section>
        </div>

        {/* Tailwind CSS Section */}
        <section className="mt-12">
          <TailwindExample />
        </section>
      </main>
    </div>
  )
}

export default App
