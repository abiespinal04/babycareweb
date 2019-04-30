import React, { Component } from 'react';
import {DonationAmount,Jobs} from '../common/Utilities';


class ContactForm extends Component {
    state = { 
        email: '',
        selection: '',
        donation:'',
        message: '',
        job:''
     }

    handleSummit = () =>{
     console.log("Email: ",this.state)
     this.setState({email: '',
     selection: '',
     donation:'',
     message: ''})
    }

    setDonation = (amount) => {
      this.setState({donation:amount})
    }
    handleDonation = () =>{

    return this.state.selection === 'Donations' ? <DonationAmount donation={this.setDonation}/> : <div/>
    }


    setJobs = (job) => {
      this.setState({job})
    }
    handleJobs = () => {
      return this.state.selection === 'Jobs' ? <Jobs job={this.setJobs}/> : <div/>
    }

    render() { 
        return ( 

            <React.Fragment>
            <form>
            <div class="form-group">
              <label for="exampleFormControlInput1">Email address</label>
              <input 
              type="email" 
              class="form-control" 
              id="exampleFormControlInput1" 
              placeholder="name@example.com"
              onChange={(email) => this.setState({email:email.target.value})} 
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlSelect1">Selection</label>
              <select 
              class="form-control" 
              id="exampleFormControlSelect1"
              value={this.state.value} 
              onChange={(selection) => this.setState({selection:selection.target.value})}
              >
                <option>Feedbacks</option>
                <option>Donations</option>
                <option>Jobs</option>
                <option>Help</option>
              </select>
            </div>
          <div>
            {this.handleDonation()}
            { this.handleJobs()}
          </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Tell us what's in your mind...</label>
              <textarea 
              class="form-control" 
              id="exampleFormControlTextarea1" 
              rows="3"
              value={this.state.message}
              onChange={(message) => this.setState({message:message.target.value})}
              ></textarea>
            </div>
          </form>
          <button type="button" class="btn btn-primary"
          onClick={this.handleSummit}
          >
            Summit
          </button>
          </React.Fragment>
            
         );
    }
}
 
export default ContactForm;