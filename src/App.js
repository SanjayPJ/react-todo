import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoContextProvider from './contexts/TodoContext'

// import logo from './logo.svg';
import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Add from './components/Add'
import Delete from './components/Delete'

function App() {
    return (

        <TodoContextProvider>
              <Router>
              <Navbar />
                <Switch>
                  <div className="grid-container">
                      <Route exact path="/" component={Home} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/add" component={Add} />
                      <Route exact path="/delete/:id" component={Delete} />
                  </div>
                </Switch>
            </Router>
        </TodoContextProvider>
    );
}
export default App;