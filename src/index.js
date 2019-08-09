import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import profilepic from './assets/images/profile-pic.png'

class Base extends React.Component {
  render() {
    return (
    <div class = "main">
    	<div id = "title-screen">
    		<div class = "vertical-container vertically-centered-in-screen">
    			<h1>Jonathan Miller</h1>
    			<p class="title-screen-subtitle">Interactive Resume</p>
    		</div>
    		<a href="#profile-page" class = "nav down-button">
    			<span class = "down-arrow" />
    		</a>
    	</div>
    	<div class = "nav nav-bar">
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
    	</div>
    	
    	
    	<div id = "profile-page" class = "white-block">
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
    					<img id='profile-pic' src={profilepic} alt="Profile Picture" />
    				</div>
    				<div class = "column">
    					<h3>Details</h3>
    					<p> Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?</p>
    				</div>
    			</div>
    		</div>
        </div>

        <div id = "projects-page" class = "grey-block">
        	<div class = "vertical-container">
        		<h2>Projects</h2>
        		<p class = "subtitle">Projects projects projects projects</p>
        		<hr />
        	</div>
        </div>

        <div id = "skills-page" class = "white-block">
        	<div class = "vertical-container">
        		<h2>Skills</h2>
        		<p class = "subtitle">Skills skills skills skills skills skills</p>
        		<hr />
        	</div>
        </div>

        <div id = "history-page" class = "grey-block">
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
    					<strong>Bachelors - Industrial and Systems Engineering Analytics</strong>
    					<p>Minor in Computer Science</p>
    					<p>College info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college info college college info college info college info college info college info college info college info</p>
    				</div>
    			</div>
    		</div>
        </div>

        <div id = "contact-page" class = "white-block">
        	<div class = "vertical-container">
        		<h2>Contact</h2>
        		<p class = "subtitle"> Contacts contact contact contact contact</p>
        		<hr />
        	</div>
        </div>
      </div>
    );
  }
}


// ========================================

ReactDOM.render(
  <Base />,
  document.getElementById('root')
);