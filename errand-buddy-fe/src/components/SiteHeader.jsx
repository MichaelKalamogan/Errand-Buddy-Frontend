import React from "react";
import { Link } from "react-router-dom";



class SiteHeader extends React.Component {
  render() {
    return (
      <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
        
        <a class="navbar-brand" href="/#">
          Errand Buddy <i className="fab fa-typo3"></i>
        </a>

       

        <a class="navbar-brand" href="/#">
        <Link to="/home" className="navbar-item" href="">Home</Link>
        
        </a>


        
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navb"
          aria-expanded="true"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navb" class="navbar-collapse collapse hide">
          <ul class="navbar-nav ml-auto">
           
            <button type="button" class="btn btn-warning">
              Find a Buddy
            </button>
          </ul>

          <ul class="nav navbar-nav">
            <li class="nav-item">
            <a class="nav-link" href="/#">
              <span class="fas fa-user"> <Link to="/register" className="navbar-item" href="/register"><strong>Sign up</strong></Link></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#">
              <span class="fas fa-sign-in-alt"> <Link to="/login" className="navbar-item"><strong>Login</strong></Link></span>
               
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default SiteHeader;