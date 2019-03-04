import React, { Component } from 'react';
import './menu.css';
import { NavLink } from 'react-router-dom';

class Menu extends Component {
    componentWillMount() {
        document.body.style = 'background: #e9ecef;';
    }
    
    render() {
        return (
            <div id="nav">


                <header id="header">
                    <div class="container">



                        <nav id="nav-menu-container">
                            <ul class="nav-menu">
                            <li><img src={require('./arohaLogo.png')} /></li>
                                <li ><NavLink to='/menu/dashboard' class="menu-active">Dasboard</NavLink></li>
                                <li><NavLink to='/menu/questions' class='dropdown-toggle'>Questions</NavLink>
                                    <ul class="dropdown-menu">
                                        <li ><NavLink to='/menu/questionTopic' class="navlink" >Topic</NavLink></li>
                                        <li ><NavLink to='/menu/questionType' class="navlink" >Type</NavLink></li>

                                        <li ><NavLink to='/menu/questionComplexity' class="navlink" >Complexity</NavLink></li>
                                        <li ><NavLink to='/menu/questions' class="navlink" >Questions</NavLink></li>

                                    </ul>

                                </li>

                                <li><NavLink to='/menu/answers' class='dropdown-toggle'>Answers</NavLink>
                                    <ul class="dropdown-menu">
                                        <li><NavLink to='/menu/answers' class="navlink">Answers</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to='/menu/results' class='dropdown-toggle'>Results</NavLink>

                                    <ul class="dropdown-menu">
                                        <li><NavLink to='/menu/results' class="navlink">Results</NavLink></li>
                                    </ul></li>

                            </ul>

                        </nav>
                    </div>
                </header>

            </div>

        )
    }
}
export default Menu;