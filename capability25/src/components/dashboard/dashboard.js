import React,{Component} from 'react';
import './dashboard.css';
import Menu from '../menu/menu';
import {Redirect} from 'react-router-dom';

class Dashboard extends Component{
    
    //  componentWillMount(){
    //   const receivedData=localStorage.getItem(JSON.stringify(isLoggedin)); 
    //      if(!receivedData){
    //         this.props.history.push("/")
    //      } 
    //  }
    render(){
       
        if (localStorage.getItem('isLoggedIn') === null) {
            return <Redirect to='/login' />
          }
        else{
         return(
            <div >
        <Menu />
     <div className="dashoardImg">     
        <h2>Welcome to Capability Test App</h2>
        </div>
        </div>
       
    )
    }
             }
          
        
       
}
export default Dashboard;