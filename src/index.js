import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Base extends React.Component {
  render() {
    return (
    <div className = "main">
    	<div className = "nav-bar">
    		<ul>
    			<li>
    				<a href="#/profile" className="button">Jump to profile</a>
    			</li>
    		</ul>
    	</div>
        <div className="spacing">
          <div>Jonathan Miller</div>
          <div>AA</div>
          <div>Spacing</div>
          <div>Spacing</div>
          <div>Spacing</div>
          <div>Spacing</div>
          <div>Spacing</div>
          <div>Spacing</div>
          <div id="/profile">CC</div>
          <div>AA</div>
          <div>AA</div>
          <div>AA</div>
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