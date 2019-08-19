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
    					<p>I'm a skilled programmer currently going to school for ISE, with a minor in CS. I started programming at a very young age, and I already have 10 years of software development experience under my belt. My passion is automation. I love making scripts and macros to speed up my workflow. I'm diversifying into ISE because the automation in manufacturing processes is fascinating to me.</p>
    				</div>
    				<div class = "column">
    					<img class='pic' src={profilepic} alt="Profile Picture" />
    				</div>
    				<div class = "column">
    					<h3>Details</h3>
    					<p>
                            <strong>Name:</strong>
                            <br />
                            Jonathan Glen Miller
                            <br />
                            <strong>Age:</strong>
                            <br />
                            20 years
                            <br />
                            <strong>Location:</strong>
                            <br />
                            Norman, OK
                            <br />
                            <strong>Status:</strong>
                            <br />
                            Currently unemployed
                            <br />
                        </p>
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
                        <strong>Machine Learning in Python</strong>
                        <p class = "date">Apr 2019 - Present</p>
                        <a href="https://github.com/jonathanmiller2/Python-Stk-Public" class="project icon-link icon-link-button">
                                    <img src={githubicon} alt="GitHub: " />
                                    <p>/Python-Stk-Public</p>            
                        </a>
                    </div>
                    <div class = "column">
                        <strong>I Build Machine-Learning Asset Trading Algorithms Using Python</strong>
                        <p>Both as a hobby, and to ease the costs of being a full-time student, I develop machine learning algorithms to identify profitable micro and macroeconomic trends. </p>
                        <p>My algorithms include ensembles of DNN, RF, SVM, LSTM, Naive-Bayes, and RBFNN models for technical and statistical analysis. Presenly, I'm working on the addition of the new Transformer models for fundamental analysis.</p>
                        <p>My models operate on data sampled from various sources, mostly online APIs. Those data are stored in locally hosted databases, and I use them to training and testing.</p>
                        <p>I taught myself all of the finance, statistics, python, and machine learning prinicples required to make my algorithms profitable.</p>
                    </div>
                </div>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>Personal Website</strong>
                        <p class = "date">Aug 2019</p>
                        <a href="https://github.com/jonathanmiller2/Personal-Website-Public" class="project icon-link icon-link-button">
                                    <img src={githubicon} alt="GitHub: " />
                                    <p>/Personal-Website-Public</p>            
                        </a>
                    </div>
                    <div class = "column">
                        <strong>I Built This Website from Scratch Using React/Node</strong>
                        <p>This website was built using a React.js frontend with a Node.js backend.</p>
                        <p>I created this website to help me get hired for an internship. I used other personal websites as inspiration, with some customizations of my own. I taught myself all of the skills I needed in two weeks, and finished the project within a month.</p>
                        <p>This project required skills in React, Node, Javascript, HTML, and CSS.</p>
                    </div>
                </div>
                
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>Machine Learning in JS</strong>
                        <p class = "date">Dec 2018 - Apr 2019</p>
                        <a href="https://github.com/jonathanmiller2/Deep-Neural-Network-Public" class="project icon-link icon-link-button">
                                    <img src={githubicon} alt="GitHub: " />
                                    <p>/Deep-Neural-Network-Public</p>            
                        </a>
                    </div>
                    <div class = "column">
                        <strong>I Built a Deep Neural Network from Scratch Using JavaScript</strong>
                        <p>I re-created a deep neural network by reading academic papers on machine learning and reverse engineering the math behind them. I did this in order to demonstrate my own programming skills, as well as learn the calculus that powers machine learning.</p>
                        <p>I decided to create it in JavaScript in order to increase the difficulty of the project. JavaScript has none of the optimizations, data structures, or boilerplate code required for machine learning, so I coded them all myself.</p>
                        <p>To read more about this project, I highly recommend you check out the readme on the GitHub page.</p>
                    </div>
                </div>
                <hr />
                <h3>Product Development</h3>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>OU Covered Walkways</strong>
                        <p class = "date">Nov 2018 - Dec 2018</p>
                    </div>
                    <div class = "column">
                        <strong>I Led a Team of 5 in Developing Coverings for OU's Walkways</strong>
                        <p>For our introductory engineering course at OU, we had to develop an engineering project with a presentable prototype.</p>
                        <p>My idea was to develop a solution for students being rained on, snowed on, and sometimes hailed on. I did the CAD for the project, and did the woodworking for a physical model. The model included a pathway, simulated rain, and showed howed the coverings could be deployed with ease. Our project won 2nd in the class, out of 8.</p>
                        <p>In the end, the project showed a lot of merit. However, we did not present it to the OU campus development officials, as I quickly moved on to other projects.</p>
                    </div>
                </div>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>Face-recognition Door Lock</strong>
                        <p class = "date">Aug 2017 - May 2018</p>
                    </div>
                    <div class = "column">
                        <strong>I Developed Face-recognition Door Locks for Schools</strong>
                        <p>For Engineering Design and Development, the capstone course of my pre-engineering program, I had to create a marketable, sellable project.</p>
                        <p>My idea was to develop intuitive locks for school doors that would speed up the process of attendance taking and lockdowns. Additionally, my design was motivated by preventing and mitigating the risk of school shootings.</p>
                        <p>Throughout the course of the project, I developed several prototypes, did market research, and produced all of the documentation required for the patent process. Through this project I developed skills in research and detailed documentation, as well as programming skills, such as image processing, basic python, and Raspberry Pi-based development.</p>
                    </div>
                </div>
                <hr />
                <h3>Other</h3>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>Game Development</strong>
                        <p class = "date">Jun 2019</p>
                    </div>
                    <div class = "column">
                        <strong>I led a team of 4 for a Game Jam</strong>
                        <p>A Game Jam is a competition where teams are given a topic, and have to develop a video game from scratch before a (usually short) deadline.</p>
                        <p>The Game Jam we participated in was the Extra Credits Game Jam #4, which had a 100 hour (Thursday - Monday) time limit.</p>
                        <p>In that time, we developed a game called Blobs and Bridges. Our game included various systems, such as: computer player AI, pathfinding algorithms, dense object-oriented code, complex shader programming, and dynamic click controls.</p>
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
                <hr />
                <h3>Other</h3>
                <div class = "horizontal-container">
                    <ul class = "left column">
                        <li>
                            <span class = "skill-name">Extemporaneous Speaking</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Teaching / Tutoring</span>
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
                            <span class = "skill-name">Table Tennis</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={emptystaricon} class="star" alt="Empty Star" />
                            </span>
                        </li>
                        <li>
                            <span class = "skill-name">Russian</span>
                            <span class = "skill-score">
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
                                <img src={filledstaricon} class="star" alt="Filled Star" />
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
    					<strong>University of Oklahoma</strong>
    					<p class = "date">Aug 2018 - Present</p>
    				</div>
    				<div class = "column">
    					<strong>Bachelor - Industrial and Systems Engineering Analytics</strong>
    				    <p>- Minor in Computer Science<br />
    					- 4.0 GPA<br />
                        - Dean's Honor Roll<br />
                        - Treasurer for the Russian Club<br />
                        - Member of the Table Tennis team<br />
                        <br />
                        My education includes understanding, evaluating, and improving the performance of entire technical and business systems. I learned statistics-based decision making for both engineering problems and larger-scale business problems. In addition, I have learned about the use of computer science to simulate deterministic and probabilistic system models.
                        </p>
    				</div>
    			</div>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>Moore-Norman Technology Center</strong>
                        <p class = "date">Aug 2016 - May 2018</p>
                    </div>
                    <div class = "column">
                        <strong>Pre-Engineering</strong>
                        <p>
                        - 4.0 GPA<br />
                        - Programmer for the MNTC FIRST Robotics team <br />
                        <br />
                        I took beginner engineering classes concurrently with my highschool education in order to better prepare myself for college. The courses I took included: <br />
                        - Digital Electronics<br />
                        - Civil Engineering and Achitecture<br />
                        - Engineering Design & Development (Product design)<br />
                        - Principles of Engineering (Engineering physics, Statistics)<br />
                        - Introduction to Engineering Design (Schematics, Autodesk Inventor)
                        </p>
                    </div>
                </div>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>Southmoore High School</strong>
                        <p class = "date">Aug 2014 - May 2018</p>
                    </div>
                    <div class = "column">
                        <strong>GED</strong>
                        <p>- Valedictorian of a class of 500<br />
                        - 4.0 GPA<br />
                        - National Honor Society Officer<br />
                        - Academic Team Member<br />
                        </p>
                    </div>
                </div>
                <hr />
                <h3>Work History</h3>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>Self-Employed</strong>
                        <p class = "date">Mar 2016 - Presently</p>
                    </div>
                    <div class = "column">
                        <strong>Part Time - Computational Finance</strong>
                        <p>To support myself between jobs, I develop trading algorithms for the stock, options, FOREX, futures, and crypto markets. These algos usually involve machine learning and heavy statistics-based testing. Using my algorithms, as well as personal trading experience, I have achieved a 21% return on investment in the past year.</p>
                    </div>
                </div>
                <div class = "horizontal-container">
                    <div class = "column-33">
                        <strong>Walmart</strong>
                        <p class = "date">Aug 2016 - Jun 2018</p>
                    </div>
                    <div class = "column">
                        <strong>Part Time - Cart Attendant</strong>
                        <p>To support myself and my family, I worked 22-25 hour weekends for two years during highschool. I managed this on top of being Valedictorian of my graduating class, and while I was taking engineering classes at my vo-tech.</p>
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
                                <a href="mailto:jonathanmiller2@hotmail.com" class="icon-link icon-link-button">
                                    <img src={emailicon} alt="E-Mail: " />
                                    <p>jonathanmiller2@hotmail.com</p>
                                </a>
                            </li>
                            <li>
                                <div class = "icon-link">
                                    <img src={phoneicon} alt="Phone Number: " />
                                    <p>(405) 550-4352</p>
                                </div>
                            </li>
                        </ul>
    				</div>
    				<div class = "column">
    					<ul>
                            <li>
                                <a href="https://www.linkedin.com/in/jonathan-g-miller/" class="icon-link icon-link-button">
                                    <img src={linkedinicon} alt="LinkedIn: " />
                                    <p>https://www.linkedin.com/in/jonathan-g-miller/</p>
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/jonathanmiller2" class="icon-link icon-link-button">
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