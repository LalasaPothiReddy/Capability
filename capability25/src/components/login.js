import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

class Login extends Component{
    constructor(props){
        super(props)
      this.state={  
          uName:'',
        Password:'',
        data:[],
        err:''
    }
    }
    componentWillMount(){
        axios.get("https://api.myjson.com/bins/15wq8u")
        .then(response=>{
            const data=response.data;
            this.setState({
                data,
                err:'UserName or Password Wrong'
            })
            console.log(data);
        })
       }
// handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//         console.log(e.target.name);
//     }
handleName(e){
this.setState({
    uName:e.target.value
})
}
handlePassword(e){
this.setState({
    Password:e.target.value
})
}
handleSubmit=(e)=>{
       
    this.setState({
        
    })
   this.props.history.push("/menu/dashboard")
    }
    render(){
        if (this.state.data === true) {
            return <Redirect to='/menu' />
          }
        return(
              <div>
              <form onSubmit={this.handleSubmit} id="login">
              <table>
                  <tbody>
                  <tr><h2>Login</h2></tr>
              <tr>
                  <td>
              <label>UserName:</label></td>
             <td> <input type="text"  placeholder="Enter User Name" className="form-control" name="uName" id="name" onChange={(e)=>{this.handleName(e)}}/><br /></td>
            
             </tr>
             <tr>
             <td> <label>Password:</label></td>
             <td> <input type="password"  placeholder="Enter Password" className="form-control" name="Password" id="pswd" onChange={(e)=>{this.handlePassword(e)}}/><br /></td>
              </tr>
              <tr>
              <td></td><td><button type="submit" value="Login" className="btn btn-primary" >Login</button>
              <button type="button" value="Cancel" className="btn btn-warning">Cancel</button></td>
             </tr>
             </tbody>
             </table>
              </form>
              </div>
        )
    }
}
export default Login;