import React, { Component } from 'react';
import './questionPage.css';
import Menu from '../menu/menu';
import axios from 'axios';

class QuestionsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionsqueryData:'',
            file: null,
            topicData:[],
            complexData:[],
            typeData: [],
            topicDropdownValue: '--Select--',
            complexityDropdownValue: '--Select--',
            typeDropdownValue:'--Select--',
            option1:'',
            option2:'',
            option3:'',
            option4:'',
            questionData:'',
            RecordData:{
                option1:'',
                option2:'',
                option3:'',
                option4:'',
            },
        }
    }
    handleOption1(e){
    this.setState({
        option1:e.target.value
    })
}
    handleOption2(e){
        this.setState({
            option2:e.target.value
        })
    }
        handleOption3(e){
            this.setState({
                option3:e.target.value
            })
        }
            handleOption4(e){
                this.setState({
                    option4:e.target.value
                })
            }
    handleQuestions = (e) => {
        this.setState({
            typeDropdownValue:e.target.value
        })      
        console.log(this.state.typeDropdownValue);
       }

    handleTopicDropdown = (e) => {
        this.setState({
            topicDropdownValue: e.target.value
        })
    }

    handleComplexityDropdown = (e) => {
        this.setState({
            complexityDropdownValue: e.target.value
        })
    }
    handleQuestionsData(e){
this.setState({
    questionData:e.target.value
})
    }
    handleQuestionsqyeryData(e){
        this.setState({
            questionsqueryData:e.target.value
        })
    }
    handleChange =(e) =>{
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
          })
    }
    componentWillMount() {
        axios.get("https://api.myjson.com/bins/bcrmu")
          .then(response => {
            console.log(response.data);
            const topicData = response.data;
        this.setState({
              topicData,
              isLoaded: true
            })
          })
          axios.get("https://api.myjson.com/bins/9kgti")
          .then(resData => {
            const complexData = resData.data;
            console.log(complexData);
            this.setState({
              complexData: complexData,
              isLoaded:true
            })
          })
          axios.get("https://api.myjson.com/bins/8ptfa")
          .then(res => {
            const typeData = res.data;
            this.setState({
              typeData : typeData,
              isLoaded:true
            })
          })
        }


    render() {
        return (
            <div>
                <Menu />
                <br />
<table id="tblPage">
                    <tr><td>
                        <label>Select Topic</label>
                        <select className="form-control" onChange={this.handleTopicDropdown}> 
                        <option>--select--</option>
                        {
                            this.state.topicData.map(topic => (
                                <option>{topic.name}</option>
                            ))
                        }
                        </select>
                    </td>
                        <td>
                            <label>Select Complexity</label>
                            <select class="form-control" disabled={this.state.topicDropdownValue === "--Select--"} onChange={this.handleComplexityDropdown}>
                                <option>--Select--</option>
                                {this.state.complexData.map(complex=>
                                  (
                                        <option>{complex.name}</option>
                                    )
                                )}

                            </select ></td>
                        <td>
                            <label>Select Type</label>
                            <select class="form-control" id="drpType" disabled={this.state.complexityDropdownValue === "--Select--"} onChange={this.handleQuestions}>
                                <option>--Select--</option>
                            {this.state.typeData.map(type=>(
                                <option>{type.name}</option>
                            ))}
                                

                            </select></td>
                    </tr>
                </table>
                <br />
                <div id="sType" class="form-group" style={{display:this.state.typeDropdownValue === "SCQ" ||this.state.typeDropdownValue === "MCQ" ? 'block' :'none'}}>
                    <center><table id="tblQpage" text-align="center" >
                        <tr>
                            <textarea className="form-control" rows="3" cols="100" id="txArea" placeholder="Enter Questions" value={this.state.questionData} onChange={(e)=>{this.handleQuestionsData(e)}}/></tr><br /><br /></table></center>-
                    <center><table>
                        <tr><td><label>a.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption1(e)}} value={this.state.option1}/></td><br />
                            <td><label>b.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption2(e)}} value={this.state.option2} /></td>
                        </tr>
                        <tr><td><label>c.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption3(e)}} value={this.state.option3} /></td><br />
                            <td><label>d.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption4(e)}} value={this.state.option4} /></td></tr>
                    </table></center>
                    <br />
                    <div id="divbtn">
                        <button type="button" value="save"  className="btn btn-success" onClick={()=>{this.handleSave()}}  disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4}>Save</button>
                        <button type="button" value="Cancel"  className="btn btn-danger" onClick={()=>{this.handleClose()}} disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4}>Cancel</button>
                    </div>
                </div>
                <div id="qType" style={{display:this.state.typeDropdownValue === "QR" ||this.state.typeDropdownValue === "sequence" ? 'block' :'none'}}>
                    <center>
                        <table id="tblQpage">
                            <tr>
                                <textarea class="form-control" rows="3" cols="100" id="txArea"  placeholder="Enter Questions" onChange={(e)=>{this.handleQuestionsqyeryData(e)}}/></tr><br /><br /></table></center>
                    <center><table><tr><td><label>Upload Image:</label></td><div>
        <input type="file" onChange={this.handleChange} />
        <img src={this.state.file} className="uploadImg"  />
      </div></tr>
                    </table></center>
                    <br />
                    <br />
                    <div id="divbtn">
                        <button type="button" value="save" className="btn btn-success" onClick={()=>{this.handleSave()}} disabled={!this.state.questionsqueryData}>Save</button>
                        <button type="button" value="Cancel" className="btn btn-danger" onClick={()=>{this.handleClose()}} disabled={!this.state.questionsqueryData}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuestionsPage;