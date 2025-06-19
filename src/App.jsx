import './App.css'
import Hello from './pages/Hello';
import { Route, Link, Switch } from 'wouter';
import Home from './pages/Home';
import About from './pages/About';
import ComponentsPage from './pages/Components';
import NotFound from './pages/NotFound';





function App() {
  return (
    <div className="app">
      <header className="app-header p-4 bg-gray-100 flex gap-4 justify-center">
      <Link href="/" className="text-blue-500 hover:underline">Home</Link>
      <Link href="/about" className="text-blue-500 hover:underline">About</Link>
      <Link href="/components" className="text-blue-500 hover:underline">Components</Link>
      </header>
      
      <main className="app-main">
      <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/components" component={ComponentsPage} />
      <Route path="/hello/:name" component={Hello} />
      {/* Default route in a switch */}
      <Route component={NotFound} />
      </Switch>
      
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
      </main>
    </div>
  )
}

export default App
