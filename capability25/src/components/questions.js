import React, { Component } from 'react';

import { NavLink } from 'react-router-dom';
import questionsMainData from "../services/questions.json"
import Menu from './menu';

class Questions extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: '',
            questionName: '',
            questionType: '',
            questionComplexity: '',
            Record: {
                id: '',
                questionName: '',
                questionType: '',
                questionComplexity: ''
            },
            questionsDatas: questionsMainData,
            currentElement: -1,
        }
    }
    handleEdit(data, id) {
        this.setState({
            id: data.id,
            questionName: data.questionName,
            questionType: data.questionType,
            questionComplexity: data.questionComplexity,
            currentElement: id
        })
    }

    handleSave(index) {
        var RecordDummy = this.state.Record;
        RecordDummy.id = this.state.id;
        RecordDummy.questionName = this.state.questionName;
        RecordDummy.questionType = this.state.questionType;
        RecordDummy.questionComplexity = this.state.questionComplexity;
        var questionsDatasDummy = this.state.questionsDatas;
        questionsDatasDummy[index] = RecordDummy;
        // Make a backend call with RecordDummy
        this.setState({
            Record: RecordDummy,
            questionsDatas: questionsDatasDummy,
            currentElement: -1,
            id: '',
            questionName: '',
            questionType: '',
            questionComplexity: '',
            Record: {
                id: '',
                questionName: '',
                questionType: '',
                questionComplexity: ''
            }
        })
    }

    handleQuetionName(e) {
        this.setState({
            questionName: e.target.value
        });
    }

    handleQuetionType(e) {
        this.setState({
            questionType: e.target.value
        });
    }

    handleQuetionComplexity(e) {
        this.setState({
            questionComplexity: e.target.value
        });
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
                    <table id="tblQues" class="table table-bordered table-striped text-center">
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
                                    <td >{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionName(e) }} defaultValue={questionsData.questionName} /> : questionsData.questionName}</td>
                                    <td>{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionType(e) }} defaultValue={questionsData.questionType} /> : questionsData.questionType}</td>
                                    <td>{index === this.state.currentElement ? <input type='text' class="form-control" onChange={(e) => { this.handleQuetionComplexity(e) }} defaultValue={questionsData.questionComplexity} /> : questionsData.questionComplexity}</td>
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