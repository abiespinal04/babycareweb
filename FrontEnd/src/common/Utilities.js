import React from 'react';
export const DonationAmount = (props) => {

    const handleDonation = (amount) =>{
        props.donation(amount)
    }
    return ( 
        <div>
        <label for="exampleFormControlInput1">Amount</label> 
        <input 
        type="email" 
        class="form-control" 
        id="exampleFormControlInput1" 
        placeholder="$ :)"
        onChange={(donation) => handleDonation(donation.target.value)}
        />
        </div>
     );
}

export const Jobs = (props) => {

    const handleJobs = (job) =>{
        props.job(job)
    }
    return ( 
        <div class="form-group">
        <label for="exampleFormControlSelect1">Available Jobs</label>
        <select 
        class="form-control" 
        id="exampleFormControlSelect1"
        onChange={(selection) => handleJobs(selection.target.value)}
        >
          <option>Front-End</option>
          <option>Back-End</option>
          <option>Database</option>
          <option>Marketing</option>
          <option>Researcher</option>
        </select>
      </div>
     );
}

 

