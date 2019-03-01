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
                        <div className="main_login">
                <div className="main_login_box">
                    <div className="login-heading">Login</div>
                    <form className="login-content" onSubmit={this.handleSubmit}>
                        <div className="form-login">
                            <label>UserName</label>
                            <br />
                            <input type="text" placeholder="UserName"/>
                        </div>
                        <div className="form-login">
                            <label>Password</label>
                            <br />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="form-submit">
                            <button type="submit" className="btn btn-primary" >Login</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default Login;