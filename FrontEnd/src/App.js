import React from 'react';
import Home from './screens/Home';
import TopHeader from './screens/TopHeader'
import Contact from './screens/Contact'
import Projects from './screens/Projects'
import {Route,Switch} from 'react-router-dom';



function App() {
  return (
    <React.Fragment>
    <TopHeader/>
    <div className="w-100 p-3 container" >
 
       
        
            <div >
                <Switch>
                <Route path='/contact' component={Contact} />
                <Route path='/projects' component={Projects} />
                <Route path='/' component={Home} />
                </Switch>
            </div>
    

      

      
    </div>
    </React.Fragment>
  
  );
}

export default App;
