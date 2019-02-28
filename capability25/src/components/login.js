import React,{Component} from 'react';
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
              <div id="loginDiv">
              <form onSubmit={this.handleSubmit} id="login">
              <div>
                  <h2>Login</h2>
              </div>
                 <div>
              <label>UserName:</label>
              <input type="text"  placeholder="Enter User Name" className="form-control" name="uName" id="name" onChange={(e)=>{this.handleName(e)}}/><br />
            </div>
            <div>
             <label>Password:</label>
              <input type="password"  placeholder="Enter Password" className="form-control" name="Password" id="pswd" onChange={(e)=>{this.handlePassword(e)}}/><br />
              </div>
            <div>
              <button type="submit" value="Login" className="btn btn-primary" >Login</button></div>
              
             </form>
              </div>
        )
    }
}
export default Login;