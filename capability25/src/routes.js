import React from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import QuestionTopic from './components/questionTopic';
import Dashboard from './components/dashboard';
import QuestionComplexity from './components/questionComplexity';
import QuestionType from './components/questionType';
import Questions from './components/questions';
import Answers from './components/answers';
import Results from './components/results';
import QuestionsPage from './components/questionsPage';
import Login from './components/login';
const Routes = (props) => {
    return(
        <BrowserRouter>
        <Switch>
               <Route path='/' component={Login} exact/>
                <Route path='/menu/dashboard' component={Dashboard} />
                <Route path='/menu/questionComplexity' component={QuestionComplexity} />
                <Route path='/menu/questionTopic' component={QuestionTopic} />
                <Route path='/menu/questionType' component={QuestionType} />
                <Route path='/menu/questions' component={Questions} />
                <Route path='/menu/answers' component={Answers} />
                <Route path='/menu/results' component={Results} />
                <Route path='/menu/questionsPage' component={QuestionsPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;