import React, { Component } from 'react';
import './questionTopic.css';
import questionTopicData from '../services/quetionstopic.json';
import Menu from './menu';
import axios from 'axios';

class QuestionTopic extends Component {
  constructor(props) {
    super(props);
this.state = {
    topicData: [],
    addTopic: false,
     editElement:-1,
     name:'',
     acronym:'',
    status:0,   
     Record:{
       name:'',
       acronym:'',
       status:''
     }
    }
    }
handleName(e){
  this.setState({
    name:e.target.value
  })
 
}
 handleAcronym(e){
   this.setState({
     acronym:e.target.value
   })
   console.log(this.state.acronym);
 }
handleChoice = () => {
 
  if(this.state.addTopic === false) {
    this.setState({
      addTopic: true
    });
  }
    
}
handleEdit(data,id) {
  
  this.setState({
    name:data.name,
    acronym:data.acronym,
    editElement: id
  });
}
handleSave(index) {
  const dummyRecord = this.state.Record;
  dummyRecord.name=this.state.name;
  dummyRecord.acronym=this.state.acronym;
 const dummytopicData = this.state.topicData;
 dummytopicData[index] = dummyRecord;
 this.setState({
        editElement:-1,
        topicData:dummytopicData,
      
        Record:{
     name:'',
     acronym:'', 
     status: ''
   }
 });
}
handleStatus(data, status, index) {

  const dummyRecord = this.state.Record;

  dummyRecord.name = data.name;
  dummyRecord.acronym = data.acronym;
  dummyRecord.status = status === 0 ? 1 : 0;

  const dummytopicData = this.state.topicData;
  dummytopicData[index] = dummyRecord;
  this.setState({
      topicData: dummytopicData,

      Record: {
          name: '',
          acronym: '',
          status: ''
      }

  });
  alert(JSON.stringify(this.state.topicData));
}
handleSaveData(){
  const dummyRecord = this.state.Record;
  dummyRecord.name=this.state.name;
  dummyRecord.acronym=this.state.acronym;
 const dummytopicData = this.state.topicData;
 dummytopicData[this.state.topicData.length+1] = dummyRecord;
 this.setState({
       Record:dummyRecord,
       topicData:dummytopicData,
       editElement:-1,
       addTopic: false,
       name:'',
       acronym:'',
        Record:{
          name:'',
          acronym:'',
          status: ''
        }
       });
}
componentWillMount(){
  axios.get("https://api.myjson.com/bins/h1d7y")
  .then(response=>{
    const topicData=response.data;
    this.setState({
      topicData
    })
  })
}

  render() {    
    const topicData = this.state.topicData.map((item, index) => {
      return (
        <tr>
          <td>{this.state.editElement===index ? <input type='text'className="form-control" onChange={(e)=>{this.handleName(e)}} defaultValue={item.name}/>:item.name}</td>
           <td>{this.state.editElement===index ? <input type='text' className="form-control" onChange={(e)=>{this.handleAcronym(e)}} defaultValue={item.acronym}/>:item.acronym}</td>
          <td>
              <label className="switch" id="status">
                <input type="checkbox"  checked={item.status} onChange={() => this.handleStatus(item, item.status, index)}/>
                <span className="slider round" />
              </label>
            </td>
          <td>
          <div>
          {this.state.editElement===index ?<svg onClick={()=>{this.handleSave(index)}} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" /></svg>   :
          <svg onClick={(e)=>{this.handleEdit(item,index)}} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>
          }
              
           </div>
            
          </td>
          
        </tr>
      )
    });
    
    
    return (
      <div>
        <Menu />
        <div>
            <br />
                    <button type="button" id="add-row" value="add question topic" className="btn btn-primary" onClick={this.handleChoice}>Add Question Topic</button>
        </div>
            <br />
       
        <table className="table table-striped">
        <thead className="thead-light">
            <th>Name</th>
            <th>Acronym</th>
            <th>Status</th>
            <th>Action</th>
            </thead>
          <tbody>
          <tr style={{display: this.state.addTopic ? 'contents' : 'none'}}>
            <td><input type="text"   className="form-control"  value={this.state.name} onChange={(e) => this.handleName(e)} /></td>
            <td><input type="text"  className="form-control"  value={this.state.acronym} onChange={(e) => this.handleAcronym(e)} /></td>
            <td>
              <label className="switch" id="status">
                <input type="checkbox" />
                <span className="slider round" />
              </label>
            </td>
            <td><button type="button" id="qtopicbutton" className="btn btn-primary" value="edit" onClick={()=>{this.handleSaveData()}}>Save</button></td>
          </tr>
            {topicData}
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default QuestionTopic;