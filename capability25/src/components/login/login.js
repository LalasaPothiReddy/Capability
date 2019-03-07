import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import './login.css';

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
                        <div class="login">
	<h1>Admin Console</h1>
    <form onSubmit={this.handleSubmit}>
    	<input type="text" name="u" id="loginInput" placeholder="Username" required="required" />
        <input type="password" name="p" id="loginInput"  placeholder="Password" required="required" />
        <button type="submit" className="login-btn login-btn-primary login-btn-block login-btn-large">Login</button>
    </form>
</div>

        )
    }
}
export default Login;