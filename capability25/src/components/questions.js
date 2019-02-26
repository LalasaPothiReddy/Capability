import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Menu from './menu';

class Questions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoaded:false,
            id: '',
            description: '',
            questiontype: '',
            questioncomplexity: '',
            Record: {
                id: '',
                description: '',
                questiontype: '',
                questioncomplexity: ''
            },
            questionsDatas: [],
            currentElement: -1,
        }
    }
    handleEdit(data, id) {
        this.setState({
            id: data.id,
            description: data.description,
            questiontype: data.questiontype,
            questioncomplexity: data.questioncomplexity,
            currentElement: id
        })
    }

    handleSave(index) {
        var RecordDummy = this.state.Record;
        RecordDummy.id = this.state.id;
        RecordDummy.description = this.state.description;
        RecordDummy.questiontype = this.state.questiontype;
        RecordDummy.questioncomplexity = this.state.questioncomplexity;
        var questionsDatasDummy = this.state.questionsDatas;
        questionsDatasDummy[index] = RecordDummy;
        // Make a backend call with RecordDummy
        this.setState({
            Record: RecordDummy,
            questionsDatas: questionsDatasDummy,
            currentElement: -1,
            id: '',
            description: '',
            questiontype: '',
            questioncomplexity: '',
            Record: {
                id: '',
                description: '',
                questiontype: '',
                questioncomplexity: ''
            }
        })
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
        return (
            <div>
                <Menu />
                <div>
                    <br />
                    <button type="button" id="btn" value="add question" class="btn btn-primary" ><NavLink to='/questionsPage'>Add Question</NavLink></button>
                </div>
                <br />
                <br />
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
                                    <td>{questionsData.id}</td>
                                    <td >{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionName(e) }} defaultValue={questionsData.description} /> : questionsData.description}</td>
                                    <td>{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionType(e) }} defaultValue={questionsData.questiontype} /> : questionsData.questiontype}</td>
                                    <td>{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionComplexity(e) }} defaultValue={questionsData.questioncomplexity} /> : questionsData.questioncomplexity}</td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkbox" />
                                            <span class="slider round"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <div >  {index === this.state.currentElement ? <svg onClick={() => { this.handleSave(index) }} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 18 18"><path d="M6.61 11.89L3.5 8.78 2.44 9.84 6.61 14l8.95-8.95L14.5 4z" /></svg> : <svg onClick={() => { this.handleEdit(questionsData, index) }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" /></svg>}</div>
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