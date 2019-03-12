import React, { Component } from 'react';
import './questionPage.css';
import Menu from '../menu/menu';
import axios from 'axios';

class QuestionsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            mName:'',
            sName:'',
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
                sName:'',
                option1:'',
                option2:'',
                option3:'',
                option4:'',
                questionData:'',
                mName:'',
                questionsqueryData:''
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
            typeDropdownValue:e.target.value,
               sName:'',
                option1:'',
                option2:'',
                option3:'',
                option4:'',
                questionData:'',
                mName:'',
                questionsqueryData:'',
                topicDropdownValue:'',
                complexityDropdownValue:'',
           
        })      
       
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
    handleQuestionsqueryData(e){
        this.setState({
            questionsqueryData:e.target.value
        })
    }
    handleAnswer(e){
        this.setState({
           // [e.target.name]:e.target.value
           sName:e.target.value
        })
      
    }
    handleChange =(e) =>{
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
          })
    }
    handleCAnswer(e){
            this.setState({
                mName:e.target.value
            })
    }
    handleSave(){
        const dummyRecordData=this.state.RecordData;
       dummyRecordData.sName=this.state.sName;
       dummyRecordData.option1=this.state.option1;
       dummyRecordData.option2=this.state.option2;
       dummyRecordData.option3=this.state.option3;
       dummyRecordData.option4=this.state.option4;
       dummyRecordData.questionData=this.state.questionData;
       dummyRecordData.mName=this.state.mName;
       dummyRecordData.questionsqueryData=this.state.questionsqueryData;
       dummyRecordData.topicDropdownValue=this.state.topicDropdownValue;
       dummyRecordData.complexityDropdownValue=this.state.complexityDropdownValue;
       dummyRecordData.typeDropdownValue=this.state.typeDropdownValue;
       this.setState({
           RecordData:dummyRecordData,
        sName:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        questionData:'',
        mName:'',
        questionsqueryData:'',
        topicDropdownValue:'',
        complexityDropdownValue:'',
        typeDropdownValue:''
       })
       alert("data saved successfully" +JSON.stringify(this.state.RecordData));
    }
    handleClose(){
        alert("cancel successful");
    }
    componentWillMount() {
               axios.all([
            axios.get('https://api.myjson.com/bins/bcrmu'),
            axios.get('https://api.myjson.com/bins/9kgti'),
            axios.get('https://api.myjson.com/bins/8ptfa')
          ])
          .then(axios.spread((topicData, complexData,typeData) => {
            // do something with both responses
            
            this.setState({
                topicData: topicData.data,
                complexData: complexData.data,
                typeData:typeData.data,
                          isLoaded:true
                        })
          }))
         
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
                            <select className="form-control" disabled={this.state.topicDropdownValue === "--Select--"} onChange={this.handleComplexityDropdown}>
                                <option>--Select--</option>
                                {this.state.complexData.map(complex=>
                                  (
                                        <option>{complex.name}</option>
                                    )
                                )}

                            </select ></td>
                        <td>
                            <label>Select Type</label>
                            <select className="form-control" id="drpType" disabled={this.state.complexityDropdownValue === "--Select--"} onChange={this.handleQuestions}>
                                <option>--Select--</option>
                            {this.state.typeData.map(type=>(
                                <option>{type.name}</option>
                            ))}
                                

                            </select></td>
                    </tr>
                </table>
                <br />
                <div id="sType" className="form-group" style={{display:this.state.typeDropdownValue === "SCQ" ||this.state.typeDropdownValue === "MCQ" ? 'block' :'none'}}>
                   <table id="tblQpage" text-align="center" >
                        <tr>
                            <textarea className="form-control" rows="3" cols="100"  placeholder="Enter Questions" value={this.state.questionData} onChange={(e)=>{this.handleQuestionsData(e)}}/></tr><br /></table>
                      <div className="align">
                        <table className="optionTbl" text-align="center">
                        <tr ><td className="options"><label className="optLbl">a.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption1(e)}} value={this.state.option1}/></td></tr>
                          <tr>  <td className="options"><label className="optLbl">b.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption2(e)}} value={this.state.option2} /></td>
                        </tr>
                        <tr ><td className="options"><label className="optLbl">c.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption3(e)}} value={this.state.option3} /></td></tr>
                            <tr><td className="options"><label className="optLbl">d.</label><input type="text" class="form-control" onChange={(e)=>{this.handleOption4(e)}} value={this.state.option4} /></td></tr></table>
                        
                         <table className="ans" style={{display:this.state.typeDropdownValue === "SCQ" ?'block':'none'}}>
                        <tr><td ><input type="radio" className="ans1" name="sName" onChange={(e)=>{this.handleAnswer(e)}} /></td></tr>
                       <tr> <td><input type="radio"   className="ans1" onChange={(e)=>{this.handleAnswer(e)}} name="sName" /></td></tr>
                        <tr><td><input type="radio"   className="ans1" name="sName" onChange={(e)=>{this.handleAnswer(e)}}/></td></tr>
                        <tr><td><input type="radio" className="ans2" name="sName" onChange={(e)=>{this.handleAnswer(e)}} />
                         </td></tr>
                         <div id="divbtn" style={{display:this.state.typeDropdownValue === "SCQ" ?'block':'none'}}>
                        <button type="button" value="save"  className="btn btn-success" onClick={()=>{this.handleSave()}}  disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4 || !this.state.sName }>Save</button>
                        <button type="button" value="Cancel"  className="btn btn-danger" onClick={()=>{this.handleClose()}} disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4  || !this.state.sName }>Cancel</button>
                    </div>
                    </table> 
                    <table className="ans" style={{display:this.state.typeDropdownValue === "MCQ" ?'block':'none'}}>
                        <tr><td ><input type="checkbox" className="ans1" name="mName" onChange={(e)=>{this.handleCAnswer(e)}} /></td></tr>
                       <tr> <td><input type="checkbox"   className="ans1" onChange={(e)=>{this.handleCAnswer(e)}} name="mName" /></td></tr>
                        <tr><td><input type="checkbox"   className="ans1" name="mName" onChange={(e)=>{this.handleCAnswer(e)}}/></td></tr>
                        <tr><td><input type="checkbox" className="ans2" name="mName" onChange={(e)=>{this.handleCAnswer(e)}} />
                         </td></tr>
                        
                    
                    <div id="divbtn" style={{display:this.state.typeDropdownValue === "MCQ" ?'block':'none'}}>
                        <button type="button" value="save"  className="btn btn-success" onClick={()=>{this.handleSave()}}  disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4 || !this.state.mName}>Save</button>
                        <button type="button" value="Cancel"  className="btn btn-danger" onClick={()=>{this.handleClose()}} disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4  || !this.state.mName}>Cancel</button>
                    </div>
                    </table> 
                    </div>
                    <br />
                    
                </div>
                <div id="qType" style={{display:this.state.typeDropdownValue === "QR" ||this.state.typeDropdownValue === "sequence" ? 'block' :'none'}}>
                    
                        <table id="tblQpage" text-align="center">
                            <tr>
                                <textarea className="form-control" rows="3" cols="100" id="txArea"  placeholder="Enter Questions" onChange={(e)=>{this.handleQuestionsqueryData(e)}}/></tr></table><br />
                   <table ><tr><td><label className="qtbl">Upload Image:</label></td><div>
        <input type="file" onChange={this.handleChange} className="tblupload"/>
        <img src={this.state.file} className="uploadImg"  />
      </div></tr>
                    </table>
                    <br />
                    
                    <div id="divbtn">
                        <button type="button" value="save" className="btn btn-success" onClick={()=>{this.handleSave()}} disabled={!this.state.questionsqueryData }>Save</button>
                        <button type="button" value="Cancel" className="btn btn-danger" onClick={()=>{this.handleClose()}} disabled={!this.state.questionsqueryData}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default QuestionsPage;