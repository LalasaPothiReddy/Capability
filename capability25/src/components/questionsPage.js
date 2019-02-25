import React, { Component } from 'react';
import './questionPage.css';
import Menu from './menu';

class QuestionsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topicDropdownValue: '--Select--',
            complexityDropdownValue: '--Select--',
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
            }
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
    handleQuestions = () => {
        var type = document.getElementById("drpType").value;
        //alert(type);
        if (type === "Single" || type === "Multiple") {
            document.getElementById("sType").style.display = "block";
            document.getElementById("qType").style.display = "none";
        }
        else if (type === "Query") {
            document.getElementById("qType").style.display = "block";
            document.getElementById("sType").style.display = "none";
        }
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

    render() {
        return (
            <div>
                <Menu />
                <br />
<table id="tblPage">
                    <tr><td>
                        <label>Select Topic</label>
                        <select className="form-control" onChange={this.handleTopicDropdown}>
                            <option >--Select--</option>
                            <option >React Js</option>
                            <option>My Sql</option>
                            <option>PHP</option>
                            <option>Javascript</option>
                            <option>Angular JS</option>
                        </select>
                    </td>
                        <td>
                            <label>Select Complexity</label>
                            <select class="form-control" disabled={this.state.topicDropdownValue === "--Select--"} onChange={this.handleComplexityDropdown}>
                                <option>--Select--</option>
                                <option>Simple</option>
                                <option>Moderate</option>
                                <option>Complex</option>

                            </select ></td>
                        <td>
                            <label>Select Type</label>
                            <select class="form-control" id="drpType" disabled={this.state.complexityDropdownValue === "--Select--"} onChange={this.handleQuestions}>
                                <option>--Select--</option>
                                <option>Single</option>
                                <option>Multiple</option>
                                <option>Query</option>

                            </select></td>
                    </tr>
                </table>
                <br />
                <div id="sType" class="form-group">
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
                <div id="qType">
                    <center>
                        <table id="tblQpage">
                            <tr>
                                <textarea rows="10" cols="100" id="txArea"  /></tr><br /><br /></table></center>
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