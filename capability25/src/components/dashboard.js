import React,{Component} from 'react';
import './dashboard.css';
import Menu from './menu';

class Dashboard extends Component{
    render(){
        return(
            <div>
            <Menu />
        <h2>Welcome to Capability Test App</h2>
        </div>
    )
    }
}
export default Dashboard;