import React, { Component } from 'react';
import {Link} from "react-router-dom";



class Header extends Component {
    state = {  }

    handleActiveScreen = () => {

    }
    render() { 
        return (   
             
          <nav class="navbar navbar-dark bg-primary">
          <div>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item">
              <Link class="nav-link active" id="pills-home-tab" data-toggle="pill" to="/" role="tab" aria-controls="pills-home" aria-selected="true">Home</Link>
            </li>
            <li class="nav nav-pills mb-3">
              <Link class="nav-link active" id="pills-profile-tab" data-toggle="pill" to="/projects" role="tab" aria-controls="pills-profile" aria-selected="false">Projects</Link>
            </li>
            <li class="nav nav-pills mb-3">
              <Link class="nav-link active" id="pills-contact-tab" data-toggle="pill" to="/contact" role="tab" aria-controls="contact" aria-selected="false">Contact</Link>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"></div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"></div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"></div>
          </div>
         </div>
           </nav>
         );
    }
}
 
export default Header;