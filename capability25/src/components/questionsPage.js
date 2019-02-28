import React, { Component } from 'react';
import './questionPage.css';
import Menu from './menu';
import axios from 'axios';

class QuestionsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
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
    componentWillMount() {
        axios.get("https://api.myjson.com/bins/h1d7y")
          .then(response => {
            console.log(response.data);
            const topicData = response.data;
        this.setState({
              topicData,
              isLoaded: true
            })
          })
          axios.get("https://api.myjson.com/bins/rr63y")
          .then(resData => {
            const complexData = resData.data;
            console.log(complexData);
            this.setState({
              complexData: complexData,
              isLoaded:true
            })
          })
          axios.get("https://api.myjson.com/bins/vi77y")
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
                            <textarea class="form-control" rows="4" cols="100" id="txArea" value={this.state.questionData} onChange={(e)=>{this.handleQuestionsData(e)}}/></tr><br /><br /></table></center>
                    <center><table>
                        <tr><td><label>a.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption1(e)}} value={this.state.option1}/></td><br />
                            <td><label>b.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption2(e)}} value={this.state.option2} /></td>
                        </tr>
                        <tr><td><label>c.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption3(e)}} value={this.state.option3} /></td><br />
                            <td><label>d.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption4(e)}} value={this.state.option4} /></td></tr>
                    </table></center>
                    <br />
                    <div id="divbtn">
                        <button type="button" value="save" class="btn btn-primary" onClick={this.props.handleSave}>Save</button>
                        <button type="button" value="Cancel" class="btn btn-warning" onClick={()=>{this.handleClose()}}>Cancel</button>
                    </div>
                </div>
                <div id="qType" style={{display:this.state.typeDropdownValue === "QR" ||this.state.typeDropdownValue === "sequence" ? 'block' :'none'}}>
                    <center>
                        <table id="tblQpage">
                            <tr>
                                <textarea class="form-control" rows="10" cols="100" id="txArea"  /></tr><br /><br /></table></center>
                    <center><table><tr><td><label>Upload Image:</label></td><input type="file" /></tr>
                    </table></center>
                    <div id="divbtn">
                        <button type="button" value="save" class="btn btn-primary" onClick={()=>{this.handleSave()}}>Save</button>
                        <button type="button" value="Cancel" class="btn btn-warning" onClick={()=>{this.handleClose()}}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuestionsPage;