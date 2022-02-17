import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import BarChart from './barchart/src/BarChart';
import {App as Tree} from './tree/src/index.js';
import {Example as Spheres} from './spheres/src/index.js'

function App() {
  return (
    <div className="App">
      <h1>My Gallery</h1>
      <Router>
        <ul>
          <Link to="/Barchart">
            <li>Barchart</li>
          </Link>
          <Link to="/Tree">
            <li>Tree</li>
          </Link>
          <Link to="/Spheres">
            <li>Spheres</li>
          </Link>
        </ul>
        <Routes>
          <Route
            path="/Barchart"
            element={<BarChart />}
          />
          <Route
            path="/Tree"
            element={<Tree />}
          />
          <Route
            path="/Spheres"
            element={<Spheres />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
