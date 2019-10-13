import React from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends React.Component {
    render() {
        return (
            <div className="top-bar">
              <div className="top-bar-left">
                  <ul className="menu">
                      <li className="menu-text">Complete React</li>
                      <li><Link style={{textTransform: "uppercase"}} to="/"><small>Home</small></Link></li>
                      <li><Link style={{textTransform: "uppercase"}} to="/add"><small>Add todo</small></Link></li>
                      <li><Link style={{textTransform: "uppercase"}} to="/about"><small>About</small></Link></li>
                  </ul>
              </div>
          </div>
        );
    }
}