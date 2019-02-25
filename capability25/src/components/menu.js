import React,{Component} from 'react';
import './menu.css';
import {NavLink} from 'react-router-dom';

class Menu extends Component{
    render(){
           return(
            <div id="nav">
<ul>
    <li><img src={require('./logo.png')} /></li>
<li><NavLink to='/menu/dashboard'>Dasboard</NavLink>
</li>
<li><NavLink to='/menu/questions'>Questions</NavLink>
<ul>
<li><NavLink to='/menu/questionTopic'>Topic</NavLink></li>
<li><NavLink to='/menu/questionType'>Type</NavLink></li>

<li><NavLink to='/menu/questionComplexity'>Complexity</NavLink></li>
<li><NavLink to='/menu/questions'>Questions</NavLink></li>

</ul>
</li>

<li><NavLink to='/menu/answers'>Answers</NavLink>
<ul>
    <li><NavLink to='/menu/answers'>Answers</NavLink></li>
</ul>
</li>
<li><NavLink to='/menu/results'>Results</NavLink>

<ul>
    <li><NavLink to='/menu/results'>Results</NavLink></li>
</ul></li>

</ul>


</div>

        )
    }
}
export default Menu;