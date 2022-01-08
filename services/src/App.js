
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Header  from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"

import "./index.css"


function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home/>}> </Route>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
