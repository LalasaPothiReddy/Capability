import React, { Component } from 'react';
import './questionPage.css';
import Menu from '../menu/menu';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

class QuestionsPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selectedCheckbox:'',
            isCheckboxSelected:'',
            selectedRadio:'',
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
            isRadioSelected:'',
            questionData:'',
            RecordData:{
                selectedRadio:'',
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
            // selectedRadio:'',
            //     option1:'',
            //     option2:'',
            //     option3:'',
            //     option4:'',
            //     questionData:'',
            //     mName:'',
            //     questionsqueryData:'',
            //     topicDropdownValue:'',
            //     complexityDropdownValue:'',
           
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
    handleAnswer1(e){
        this.setState({
            selectedRadio:e,
            isRadioSelected:1
        })
    }

    handleAnswer2(e){
        this.setState({
            selectedRadio:e,
            isRadioSelected:2
        })     
    }

    handleAnswer3(e){
        this.setState({
            selectedRadio:e,
            isRadioSelected:3
        })
    }

    handleAnswer4(e){
        this.setState({
            selectedRadio:e,
            isRadioSelected:4
        })
    }

    handleChange =(e) =>{
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
          })
    }
    handleCAnswer1(e){
            this.setState({
                selectedCheckbox:e,
                isCheckboxSelected:'1'
            })
    }
    handleCAnswer2(e){
        this.setState({
            selectedCheckbox:e,
            isCheckboxSelected:'2'
        })
}
handleCAnswer3(e){
    this.setState({
        selectedCheckbox:e,
        isCheckboxSelected:'3'
    })
}
handleCAnswer4(e){
    this.setState({
        selectedCheckbox:e,
        isCheckboxSelected:'4'
    })
}
    handleSave(){
        const dummyRecordData=this.state.RecordData;
       dummyRecordData.selectedRadio=this.state.selectedRadio;
       dummyRecordData.option1=this.state.option1;
       dummyRecordData.option2=this.state.option2;
       dummyRecordData.option3=this.state.option3;
       dummyRecordData.option4=this.state.option4;
       dummyRecordData.questionData=this.state.questionData;
       dummyRecordData.selectedCheckbox=this.state.selectedCheckbox;
       dummyRecordData.questionsqueryData=this.state.questionsqueryData;
       dummyRecordData.topicDropdownValue=this.state.topicDropdownValue;
       dummyRecordData.complexityDropdownValue=this.state.complexityDropdownValue;
       dummyRecordData.typeDropdownValue=this.state.typeDropdownValue;
       this.setState({
           RecordData:dummyRecordData,
           selectedRadio:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        questionData:'',
        selectedCheckbox:'',
        questionsqueryData:'',
        topicDropdownValue:'',
        complexityDropdownValue:'',
        //isRadioSelected :5 
       })
       alert(this.state.isRadioSelected);
       alert("data saved successfully" +JSON.stringify(this.state.RecordData));
    }
    handleClose(){
        alert("cancel successful");
    }
    componentWillMount() {
        if (localStorage.getItem('isLoggedIn') != null) {
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
        }
render() {
    if (localStorage.getItem('isLoggedIn') === null) {
        return <Redirect to='/login' />
      }
      else{
        return (
            <div>
                <Menu />
                
<table id="tblPage" > 
<tbody>
                    <tr><td>
                        <label>Select Topic</label>
                        <select className="form-control" onChange={this.handleTopicDropdown}> 
                        <option>--select--</option>
                        {
                            this.state.topicData.map(topic => (
                                <option value={topic.id}>{topic.name}</option>
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
                                        <option key={complex.name}>{complex.name}</option>
                                    )
                                )}

                            </select ></td>
                        <td>
                            <label>Select Type</label>
                            <select className="form-control" id="drpType" disabled={this.state.complexityDropdownValue === "--Select--"} onChange={this.handleQuestions}>
                                <option>--Select--</option>
                            {this.state.typeData.map(type=>(
                                <option key={type.name}>{type.name}</option>
                            ))}
                                

                            </select></td>
                    </tr>
                    </tbody>
                </table>
             
                <div id="sType" className="form-group" style={{display:this.state.typeDropdownValue === "SCQ" ||this.state.typeDropdownValue === "MCQ" ? 'block' :'none'}}>
                   <table id="tblQpage" text-align="center" >
                        <tbody>
                        <tr><td>
                            <textarea className="form-control" rows="3" cols="100"  placeholder="Enter Questions" value={this.state.questionData} onChange={(e)=>{this.handleQuestionsData(e)}}/></td></tr>
                   </tbody></table>
                      <div className="align">
                        <table className="optionTbl" text-align="center">
                        <tbody>
                        <tr><td className="options"><label className="optLbl">a.</label><input type="text" className="form-control" onChange={(e)=>{this.handleOption1(e)}} value={this.state.option1}/></td></tr>
                          <tr><td className="options"><label className="optLbl">b.</label><input type="text" className="form-control" onChange={(e)=>{this.handleOption2(e)}} value={this.state.option2} /></td>
                        </tr>
                        <tr><td className="options"><label className="optLbl">c.</label><input type="text" className="form-control" onChange={(e)=>{this.handleOption3(e)}} value={this.state.option3} /></td></tr>
                            <tr><td className="options"><label className="optLbl">d.</label><input type="text" className="form-control" onChange={(e)=>{this.handleOption4(e)}} value={this.state.option4} /></td></tr>
                    </tbody></table>
                        
                         <table className="ans" style={{display:this.state.typeDropdownValue === "SCQ" ?'block':'none'}}>
                         <tbody>
                        <tr><td><input type="radio" className="ans1" selected={this.state.isRadioSelected === 1} name="selectedRadio" onChange={(e)=>{this.handleAnswer1(this.state.option1)}} /></td></tr>
                       <tr><td><input type="radio"   className="ans1" selected={this.state.isRadioSelected === 2} onChange={(e)=>{this.handleAnswer2(this.state.option2)}} name="selectedRadio" /></td></tr>
                        <tr><td><input type="radio"   className="ans1" selected={this.state.isRadioSelected === 3}  name="selectedRadio" onChange={(e)=>{this.handleAnswer3(this.state.option3)}}/></td></tr>
                        <tr><td><input type="radio" className="ans2" selected={this.state.isRadioSelected === 4} name="selectedRadio" onChange={(e)=>{this.handleAnswer4(this.state.option4)}} />
                         </td></tr>
                         <tr><td>
                         <div id="divbtn" style={{display:this.state.typeDropdownValue === "SCQ" ?'block':'none'}}>
                        <button type="button" value="save"  className="btn btn-success" onClick={()=>{this.handleSave()}}  disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4 || !this.state.selectedRadio }>Save</button>
                        <button type="button" value="Cancel"  className="btn btn-danger" onClick={()=>{this.handleClose()}} disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4  || !this.state.selectedRadio }>Cancel</button>
                    </div>
                    </td></tr>
                    </tbody>
                    </table> 
                    <table className="ans" style={{display:this.state.typeDropdownValue === "MCQ" ?'block':'none'}}>
                    
                    <tbody>
                        <tr><td ><input type="checkbox" className="ans1" name="isCheckboxSelected" selected={this.state.isCheckboxSelected === 1} onChange={(e)=>{this.handleCAnswer1(this.state.option1)}} /></td></tr>
                       <tr><td><input type="checkbox"   className="ans1" name="isCheckboxSelected" selected={this.state.isCheckboxSelected === 2} onChange={(e)=>{this.handleCAnswer2(this.state.option2)}}  /></td></tr>
                        <tr><td><input type="checkbox"   className="ans1" name="isCheckboxSelected" selected={this.state.isCheckboxSelected === 3} onChange={(e)=>{this.handleCAnswer3(this.state.option3)}}/></td></tr>
                        <tr><td><input type="checkbox" className="ans2" name="isCheckboxSelected" selected={this.state.isCheckboxSelected === 4} onChange={(e)=>{this.handleCAnswer4(this.state.option4)}} />
                         </td></tr>
                      <tr><td>  
                        <div id="divbtn" style={{display:this.state.typeDropdownValue === "MCQ" ?'block':'none'}}>
                        <button type="button" value="save"  className="btn btn-success" onClick={()=>{this.handleSave()}}  disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4 || !this.state.isCheckboxSelected}>Save</button>
                        <button type="button" value="Cancel"  className="btn btn-danger" onClick={()=>{this.handleClose()}} disabled={!this.state.questionData || !this.state.option1 || !this.state.option2 || !this.state.option3 || !this.state.option4  || !this.state.isCheckboxSelected}>Cancel</button>
                    </div>
                    </td></tr>
                    </tbody>
                    </table> 
                               </div>
                   
                    
                </div>
                <div id="qType" style={{display:this.state.typeDropdownValue === "QR" ||this.state.typeDropdownValue === "sequence" ? 'block' :'none'}}>
                    
                        <table id="tblQpage" text-align="center">
                        <tbody>
                            <tr>
                                <td>
                                <textarea className="form-control" ro-ws="5" cols="100" id="txArea"  placeholder="Enter Questions" onChange={(e)=>{this.handleQuestionsqueryData(e)}}/>
                                </td></tr>
                                </tbody></table>
                   
                    <div className="imgUp">
                  
             <span><b>Upload Image:</b></span>
            <label htmlFor="file" className="qtbl">Upload</label>
                <input type="file" name="file" id="file" className="inputfile" onChange={this.handleChange} />
                <img src={this.state.file} className="uploadImg" alt="" />
                </div>
                <div id="divbtn">
                        <button type="button" value="save" className="btn btn-success" onClick={()=>{this.handleSave()}} disabled={!this.state.questionsqueryData }>Save</button>
                        <button type="button" value="Cancel" className="btn btn-danger" onClick={()=>{this.handleClose()}} disabled={!this.state.questionsqueryData}>Cancel</button>
                    </div>
                </div>
            </div>
        )
    }
}
}
export default QuestionsPage; 
