import React from 'react'; 
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Categories from './components/layout/categories/categories'
import Landing from './components/layout/Landing';

function App() {
  return (
     <Router>
    <div className="App">
      <Navbar/>
      <Route exact path="/" component={Landing} />
      <br></br>
      <h1>Categories to bag</h1>
      <br></br>
      <Categories />
    </div>
     </Router>
  );
}

export default App;
