import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Menu from './menu';

class Questions extends Component {
constructor(props) {
        super(props)
        this.state = {
            isLoaded:false,
            url: '',
             error:false,
            description: '',
            questiontype: '',
            questioncomplexity: '',
            status:0,
            Record: {
                url: '',
                description: '',
                questiontype: '',
                questioncomplexity: '',
                status: ''
            },
            questionsDatas: [],
            currentElement: -1,
        }
     
    }
    handleEdit(data, id) {
        this.setState({
            url: data.url,
            description: data.description,
            questiontype: data.questiontype,
            questioncomplexity: data.questioncomplexity,
            currentElement: id
        })
    }

    handleStatus(data, status, index) {
alert(data.status);
        const dummyRecord = this.state.Record;
      
        dummyRecord.url = data.url;
        dummyRecord.description = data.description;
        dummyRecord.questiontype = data.questiontype;
        dummyRecord.questioncomplexity = data.questioncomplexity;
        dummyRecord.status = data.status === 0 ? 1 : 0;
      
        const dummytopicData = this.state.questionsDatas;
        dummytopicData[index] = dummyRecord;
        this.setState({
            questionsDatas: dummytopicData,
            status:data.status === 0 ? 1 : 0,
            Record:{
                url: '',
                description: '',
                questiontype: '',
                questioncomplexity: '',
                status: ''
            }
      
        });
      }

    handleSave(index,data) {
        var RecordDummy = this.state.Record;
        RecordDummy.url = this.state.url;
        RecordDummy.description = this.state.description;
        RecordDummy.questiontype = this.state.questiontype;
        RecordDummy.questioncomplexity = this.state.questioncomplexity;
        RecordDummy.status = data.status;
        var questionsDatasDummy = this.state.questionsDatas;
        questionsDatasDummy[index] = RecordDummy;
        // Make a backend call with RecordDummy
        this.setState({
            Record: RecordDummy,
            questionsDatas: questionsDatasDummy,
            currentElement: -1,
            url: '',
            description: '',
            questiontype: '',
            questioncomplexity: '',
            Record: {
                url: '',
                description: '',
                questiontype: '',
                questioncomplexity: ''
            }
        })
        alert(JSON.stringify(this.state.questionsDatas[index]));
    }

    handleQuetionName(e) {
        this.setState({
            description: e.target.value
        });
    }

    handleQuetionType(e) {
        this.setState({
            questiontype: e.target.value
        });
    }

    handleQuetionComplexity(e) {
        this.setState({
            questioncomplexity: e.target.value
        });
    }
    componentWillMount() {
        axios.get("https://api.myjson.com/bins/h7spa")
          .then(resData => {
            const questionsDatas = resData.data;
            this.setState({
                questionsDatas: questionsDatas,
              isLoaded:true
            })
          })
      }

    render() {
        var   ComplexityTypes=['Simple','Medium','Complex'];
        return (
            
            <div>
                <Menu />
                <div>
                    <br />
                    <button type="button" id="btn" value="add question" class="btn btn-primary" ><NavLink to='/menu/questionsPage'>Add Question</NavLink></button>
                </div>
                <br />
                <br />
                <div class="image-container" style={{ display: this.state.isLoaded === false ? 'block' : 'none' }}>
          <p class="image-holder">
            <img  src={require('./12345.gif')}  />
          </p>
        </div>
                <div>
                    <table id="tblQues" class="table table-bordered table-striped text-center" style={{display: this.state.isLoaded === true ? 'inline-table' : 'none'}} >
                        <thead class="thead-light">
                            <tr>
                                <th>S.No</th><th>Questions</th><th>Type</th>
                                <th>Complexity</th><th>Status</th><th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.questionsDatas.map((questionsData, index) => {
                                return <tr>
                                    <td>{questionsData.url.split('/')[5]}</td>
                                    <td >{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionName(e) }} defaultValue={questionsData.description} /> : questionsData.description}</td>
                                    <td>{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionType(e) }} defaultValue={questionsData.questiontype} /> : questionsData.questiontype}</td>
                                    <td>{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionComplexity(e) }} defaultValue={ComplexityTypes[questionsData.questioncomplexity.split('/')[5]]} /> : ComplexityTypes[questionsData.questioncomplexity.split('/')[5]-1]}</td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkbox" checked={questionsData.status===1?true:false} disabled = {this.state.currentElement === index?false:true} onChange={() => this.handleStatus(questionsData, questionsData.status, index)} />
                                            <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div >  {index === this.state.currentElement ? <svg onClick={() => { this.handleSave(index,questionsData) }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" /></svg> : <svg onClick={() => { this.handleEdit(questionsData, index) }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>}</div>
                                    </td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default Questions;