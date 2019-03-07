import React,{Component} from 'react';

class Upload extends Component{
    constructor(props){
        super(props)
        this.state = {
          file: null
        }
    }
    handleChange =(e) =>{
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
          })
    }
        render(){
            return(
                <div>
        <input type="file" onChange={this.handleChange} />
        <img src={this.state.file} />
      </div>
            )
        }
}
export default Upload;