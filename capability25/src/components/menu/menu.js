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
                    <div className="container">



                        <nav id="nav-menu-container">
                            <ul className="nav-menu">
                            <li><img src={require('.././arohaLogo.png')} /></li>
                                <li ><NavLink to='/menu/dashboard' className="menu-active">Dasboard</NavLink></li>
                                <li><NavLink to='/menu/questions' className='dropdown-toggle'>Questions</NavLink>
                                    <ul className="dropdown-menu">
                                        <li ><NavLink to='/menu/questionTopic' className="navlink" >Master Topic</NavLink></li>
                                        <li ><NavLink to='/menu/questionType' className="navlink" >Master Type</NavLink></li>
                                       
                                        <li ><NavLink to='/menu/questionComplexity' className="navlink" >Master Complexity</NavLink></li>
                                        <li ><NavLink to='/menu/questions' className="navlink" >Master Questions</NavLink></li>

                                    </ul>

                                </li>

                                <li><NavLink to='/menu/answers' className='dropdown-toggle'>Answers</NavLink>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to='/menu/answers' className="navlink">Answers</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to='/menu/results' className='dropdown-toggle'>Results</NavLink>

                                    <ul className="dropdown-menu">
                                        <li><NavLink to='/menu/results' className="navlink">Results</NavLink></li>
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