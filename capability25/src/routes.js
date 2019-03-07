import React from 'react';

import {BrowserRouter,Route,Switch} from 'react-router-dom';
import QuestionTopic from './components/questions_topic/questionTopic';
import Dashboard from './components/dashboard/dashboard';
import QuestionComplexity from './components/questions_complexity/questionComplexity';
import QuestionType from './components/questions_type/questionType';
import Questions from './components/questions/questions';
import Answers from './components/answers/answers';
import Results from './components/results/results';
import QuestionsPage from './components/questionspage/questionsPage';
import Login from './components/login/login';

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