import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import profilepic from './assets/images/profile-pic.png'

import emailicon from './assets/images/email-icon.png'
import phoneicon from './assets/images/phone-icon.png'
import linkedinicon from './assets/images/linkedin-icon.png'
import githubicon from './assets/images/github-icon.png'

class Base extends React.Component {
  render() {
    return (
    <div class = "main">
    	<section id = "title-screen">
    		<div class = "vertical-container vertically-centered-in-screen">
    			<h1>Jonathan Miller</h1>
    			<p class="title-screen-subtitle">Interactive Resume</p>
    		</div>
    		<a href="#profile-page" class = "nav down-button">
    			<span class = "down-arrow" />
    		</a>
    	</section>
    	<section class = "nav nav-bar">
    		<ul>
    			<li>
    				<a href="#profile-page" class="section-button">Profile</a>
    			</li>
    			<li>
    				<a href="#projects-page" class="section-button">Projects</a>
    			</li>
    			<li>
    				<a href="#skills-page" class="section-button">Skills</a>
    			</li>
    			<li>
    				<a href="#history-page" class="section-button">History</a>
    			</li>
    			<li>
    				<a href="#contact-page" class="section-button">Contact</a>
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
        		<p class = "subtitle">Projects projects projects projects</p>
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
        		<p class = "subtitle">Skills skills skills skills skills skills</p>
        		<hr />
        	</div>
        </section>

        <section id = "history-page" class = "grey block">
        	<div class = "vertical-container">
    			<h2>History</h2>
    			<p class="subtitle">History history history history history</p>
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
        		<p class = "subtitle"> Contacts contact contact contact contact</p>
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
                                <a href="https://www.linkedin.com/in/jonathan-miller-9a803018b/" class="contact contact-button">
                                    <img src={linkedinicon} alt="LinkedIn: " />
                                    <p>https://www.linkedin.com/in/jonathan-miller-9a803018b/</p>
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