import React,{Component} from 'react';
import './dashboard.css';
import Menu from '../menu/menu';


class Dashboard extends Component{
    render(){
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
export default Dashboard;