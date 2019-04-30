import React, { Component } from 'react';
import image from '../res/profile.png'



class MyCard extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="card" >
            <img src={image}
             style={{width: 150, height: 150}}
             />
            <div class="card-body">
              <h5 class="card-title">Software Engineer</h5>
              <p class="card-text">I am a computer science software engineer</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
         );
    }
}
 
export default MyCard;