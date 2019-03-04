import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Menu from './menu';
import './questions.css';

class Questions extends Component {
constructor(props) {
        super(props)
        this.state = {
            isLoaded:false,
            id:'',
             error:false,
            description: '',
            questiontype_name: '',
            questioncomplexity_name: '',
            status:0,
            Record: {
                id: '',
                description: '',
                questiontype_name: '',
                questioncomplexity_name: '',
                status: ''
            },
            questionsDatas: [],
            currentElement: -1,
        }
     
    }
    handleEdit(data, id) {
        this.setState({
            id: data.id,
            description: data.description,
            questiontype_name: data. questiontype_name,
            questioncomplexity_name: data.questioncomplexity_name,
            currentElement: id
        })
    }

    handleStatus(data, status, index) {
alert(data.status);
        const dummyRecord = this.state.Record;
      
        dummyRecord.id = data.id;
        dummyRecord.description = data.description;
        dummyRecord. questiontype_name = data. questiontype_name;
        dummyRecord.questioncomplexity_name = data.questioncomplexity_name;
        dummyRecord.status = data.status === 0 ? 1 : 0;
      
        const dummytopicData = this.state.questionsDatas;
        dummytopicData[index] = dummyRecord;
        this.setState({
            questionsDatas: dummytopicData,
            status:data.status === 0 ? 1 : 0,
            Record:{
                id: '',
                description: '',
                questiontype_name: '',
                questioncomplexity_name: '',
                status: ''
            }
      
        });
      }

    handleSave(index,data) {
        var RecordDummy = this.state.Record;
        RecordDummy.id = this.state.id;
        RecordDummy.description = this.state.description;
        RecordDummy.questiontype_name = this.state.questiontype_name;
        RecordDummy.questioncomplexity_name = this.state.questioncomplexity_name;
        if( RecordDummy.description === "" ||  RecordDummy.questiontype_name === "" ||  RecordDummy.questioncomplexity_name ===""){
            this.setState({
              error:true
            })
          }
          else{
        RecordDummy.status = data.status;
        var questionsDatasDummy = this.state.questionsDatas;
        questionsDatasDummy[index] = RecordDummy;
        // Make a backend call with RecordDummy
        this.setState({
            Record: RecordDummy,
            questionsDatas: questionsDatasDummy,
            currentElement: -1,
            id: '',
            description: '',
            questiontype_name: '',
            questioncomplexity_name: '',
            Record: {
                id: '',
                description: '',
                questiontype_name: '',
                questioncomplexity_name: ''
            }
        })
        alert(JSON.stringify(this.state.questionsDatas[index]));
    }
    }
    handleQuetionName(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleQuetionType(e) {
        this.setState({
            questiontype_name: e.target.value
        });
    }

    handleQuetionComplexity(e) {
        this.setState({
            questioncomplexity_name: e.target.value
        });
    }
    componentWillMount() {
        axios.get("https://api.myjson.com/bins/l03ey")
          .then(resData => {
            const questionsDatas = resData.data;
            this.setState({
                questionsDatas: questionsDatas,
              isLoaded:true
            })
          })
      }
      handleClick(){
        this.setState({
            error:false
        })
}
    render() {
      
        return (
            
            <div>
                <Menu />
                <div class="side-content">
                <div>
                    <br />
                    <button type="button" id="btn" value="add question" class="btn btn-primary" ><NavLink to='/menu/questionsPage'>Add Question</NavLink></button>
                </div>
                <br />
                <div class="alert" style={{display: this.state.error === true ? 'block':'none'}}>
                    <span class="closebtn" onClick={()=>{this.handleClick()}}>&times;</span>
                    <strong>Please Enter Details....</strong>
                  </div>
      
                <div class="image-container" style={{ display: this.state.isLoaded === false ? 'block' : 'none' }}>
          <p class="image-holder">
            <img  src={require('./12345.gif')}  />
          </p>
        </div>
        <br />
        <div class="card">
        <div class="card-body">
                    <table id="tblQues" class="table  text-center" style={{display: this.state.isLoaded === true ? 'inline-table' : 'none'}} >
                        <thead className="thead-bg">
                            <tr>
                                <th>S.No</th><th>Questions</th><th>Type</th>
                                <th>Complexity</th><th>Status</th><th>Action</th>
                            </tr>
                        </thead>
                        <tbody >
                            {this.state.questionsDatas.map((questionsData, index) => {
                                return <tr>
                                    {/* <td>{questionsData.url.split('/')[5]}</td> */}
                                    <td>{questionsData.id}</td>
                                    <td className="table-text">{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionName(e) }} defaultValue={questionsData.description} /> : questionsData.description}</td>
                                    <td>{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionType(e) }} defaultValue={questionsData.questiontype_name} /> : questionsData.questiontype_name}</td>
                                    <td>{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionComplexity(e) }} defaultValue={questionsData.questioncomplexity_name} /> : questionsData.questioncomplexity_name}</td>
                                     {/* <td>
                                        <label class="switch" id="status">
                                            <input type="checkbox" checked={questionsData.status=== 1 ? true : false} disabled = {this.state.currentElement === index?false:true} onChange={() => this.handleStatus(questionsData, questionsData.status, index)} />
                                            <span class="slider round"></span>
                                        </label>
                                    </td> */}
                                    <td><label class="switch" id="status"><input type="checkbox" /><span class="slider round"></span></label></td>
                                    <td>
                                        <div >  {index === this.state.currentElement ? <svg onClick={() => { this.handleSave(index,questionsData) }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" /></svg> : <svg onClick={() => { this.handleEdit(questionsData, index) }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>}</div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
        )
    }
}
export default Questions;