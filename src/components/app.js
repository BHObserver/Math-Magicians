import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Calculator from './calculator';

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="navbar">
          <div className="navbar-brand">Math Magicians</div>
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Calculator</Link></li>
            <li><Link to="/">Quotes</Link></li>
          </ul>
        </nav>
      </header>
      <div className="app">
        <Calculator />
      </div>
    </BrowserRouter>
  );
}

export default App;
