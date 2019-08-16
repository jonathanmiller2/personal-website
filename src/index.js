import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Link, animateScroll as scroll } from "react-scroll";

import profilepic from './assets/images/profile-pic.png'

import emailicon from './assets/images/email-icon.png'
import phoneicon from './assets/images/phone-icon.png'
import linkedinicon from './assets/images/linkedin-icon.png'
import githubicon from './assets/images/github-icon.png'
import filledstaricon from './assets/images/filled-star-icon.png'
import emptystaricon from './assets/images/empty-star-icon.png'

class Base extends React.Component {
  render() {
    return (
    <div class = "main">
    	<section id = "title-screen">
    		<div class = "vertical-container vertically-centered-in-screen">
    			<h1>Jonathan Miller</h1>
    			<p class="title-screen-subtitle">Interactive Resume</p>
    		</div>
            <Link className="nav down-button" to="profile-page" spy={true} smooth={true} duration={750} >
    			<span class = "down-arrow" />
    		</Link>
    	</section>
    	<section class = "nav nav-bar">
    		<ul>
    			<li>
                    <Link activeClass="active section-button" className="section-button" to="profile-page" spy={true} smooth={true} duration={500} >Profile</Link>
    			</li>
    			<li>
                    <Link activeClass="active section-button" className="section-button" to="projects-page" spy={true} smooth={true} duration={500} >Projects</Link>
    			</li>
    			<li>
                    <Link activeClass="active section-button" className="section-button" to="skills-page" spy={true} smooth={true} duration={500} >Skills</Link>
    			</li>
    			<li>
                    <Link activeClass="active section-button" className="section-button" to="history-page" spy={true} smooth={true} duration={500} >History</Link>
    			</li>
    			<li>
                    <Link activeClass="active section-button" className="section-button" to="contact-page" spy={true} smooth={true} duration={500} >Contact</Link>
    			</li>
    		</ul>
    	</section>
    	
    	
    	<section id = "profile-page" class = "white block">
    		<div class = "vertical-container">
    			<h2>Profile</h2>
    			<p class="subtitle">Software Dev / Industrial Engineer</p>
    			<hr />
    			<div class = "horizontal-container">
    				<div class = "column">
    					<h3>About Me</h3>
    					<p> But I must explain to you how all this mistaken idea of denouncing of a pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. </p>
    				</div>
    				<div class = "column">
    					<img class='pic' src={profilepic} alt="Profile Picture" />
    				</div>
    				<div class = "column">
    					<h3>Details</h3>
    					<p> Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    				</div>
    			</div>
    		</div>
        </section>

        <section id = "projects-page" class = "grey block">
        	<div class = "vertical-container">
        		<h2>Projects</h2>
                <p class = "subtitle">"Knowledge is of no value unless you put it into practice." <br />Anton Chekhov</p>
        		<hr />
                <h3>Programming</h3>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <h4>Project Name Project Name</h4>
                        <p class = "date">Aug 2018 - Present</p>
                    </div>
                    <div class = "column">
                        <strong>Descriptive Blurb Descriptive Blurb Descriptive Blurb</strong>
                        <p>Main detail</p>
                        <p>Other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail</p>
                    </div>
                </div>
                <hr />
                <h3>Product Development</h3>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <h4>Project Name Project Name</h4>
                        <p class = "date">Aug 2018 - Present</p>
                    </div>
                    <div class = "column">
                        <strong>Descriptive Blurb Descriptive Blurb Descriptive Blurb</strong>
                        <p>Main detail</p>
                        <p>Other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail</p>
                    </div>
                </div>
                <hr />
                <h3>Screaming Eternally Into The Abyss</h3>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <h4>Project Name Project Name</h4>
                        <p class = "date">Jan 0001 - Present</p>
                    </div>
                    <div class = "column">
                        <strong>Descriptive Blurb Descriptive Blurb Descriptive Blurb</strong>
                        <p>Main detail</p>
                        <p>Other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail other detail</p>
                    </div>
                </div>
        	</div>
        </section>

        <section id = "skills-page" class = "white block">
        	<div class = "vertical-container">
        		<h2>Skills</h2>
        		<p class = "subtitle">"The natural desire of good men is knowledge." <br />Leonardo da Vinci</p>
        		<hr />
                <h3>Computer Science</h3>
                <div class = "horizontal-container">
                    <ul class = "left column">
                        <li>
                            <span class = "skill-name">Java</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">JavaScript</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Python</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">C++</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Node.js</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">NoSQL</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Keras</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>                       
                        <li>
                            <span class = "skill-name">Tensorflow</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">OOP</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">JSON / XML</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Command Line Interface</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Machine Learning</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                    </ul>
                    <ul class = "right column">
                        <li>
                            <span class = "skill-name">C#</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">VBA</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">UML</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">HTML 5</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">CSS 3</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">HTTP / UDP / TCP / FTP</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">DOS / Windows Shell Script</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Express.js</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>   
                        <li>
                            <span class = "skill-name">React.js</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Embedded Systems Programming</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Database Administration</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">SEO</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                    </ul>
                </div>
                <hr />
                <h3>Tools</h3>
                <div class = "horizontal-container">
                    <ul class = "left column">
                        <li>
                            <span class = "skill-name">Git / GitHub / Git Flow</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Autodesk Inventor</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Microsoft Office</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Google Suite</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">MongoDB</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">NPM</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Sublime Text</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>                       
                        <li>
                            <span class = "skill-name">Netbeans</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Eclipse</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Visual Studio</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">TeX Studio (LaTeX)</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Unity</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Windows OS</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">AutoHotkey</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                    </ul>
                    <ul class = "right column">
                        <li>
                            <span class = "skill-name">Anaconda</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Pip</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Autodesk Revit</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Google Cloud Platform</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Windows Task Scheduler</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Windows IIS Manager</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>   
                        <li>
                            <span class = "skill-name">NI Multisim</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Windows Registry Editor</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">JCreator</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Notepad++</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Raspberry Pi</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Linux OS</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Mac OS</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">FileZilla</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                    </ul>
                </div>
        	</div>
        </section>

        <section id = "history-page" class = "grey block">
        	<div class = "vertical-container">
    			<h2>History</h2>
    			<p class = "subtitle">"Time is the most valuable thing a man can spend." <br />Theophrastus</p>
    			<hr />
    			<h3>Education</h3>
    			<div class = "horizontal-container">
    				<div class = "column-33">
    					<h4>University of Oklahoma</h4>
    					<p class = "date">Aug 2018 - Present</p>
    				</div>
    				<div class = "column">
    					<strong>Bachelor - Industrial and Systems Engineering Analytics</strong>
    					<p>Minor in Computer Science</p>
    					<p>College info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college college info college info college info college info college info college info college info</p>
    				</div>
    			</div>
    		</div>
        </section>

        <footer id = "contact-page" class = "black block">
        	<div class = "vertical-container">
        		<h2>Contact</h2>
        		<p class = "title-screen-subtitle">"The best time to make friends is before you need them." <br />Ethel Barrymore</p>
        		<hr />
        		<div class = "horizontal-container">
    				<div class = "column">
                        <ul>
                            <li>
                                <a href="mailto:jonathanmiller2@hotmail.com" class="contact contact-button">
                                    <img src={emailicon} alt="E-Mail: " />
                                    <p class>jonathanmiller2@hotmail.com</p>
                                </a>
                            </li>
                            <li>
                                <div class = "contact">
                                    <img src={phoneicon} alt="Phone Number: " />
                                    <p>(405) 550-4352</p>
                                </div>
                            </li>
                        </ul>
    				</div>
    				<div class = "column">
    					<ul>
                            <li>
                                <a href="https://www.linkedin.com/in/jonathan-g-miller/" class="contact contact-button">
                                    <img src={linkedinicon} alt="LinkedIn: " />
                                    <p>https://www.linkedin.com/in/jonathan-g-miller/</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/jonathanmiller2" class="contact contact-button">
                                    <img src={githubicon} alt="GitHub: " />
                                    <p>https://github.com/jonathanmiller2</p>
                                </a>
                            </li>
                        </ul>
    				</div>
    			</div>
                <div class = "spacing" />
        	</div>
        </footer>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Base />,
  document.getElementById('root')
);