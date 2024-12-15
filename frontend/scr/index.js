import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Global styles, optional
import AttendanceTracker from './AttendanceTracker'; // Main component

// Render the AttendanceTracker component into the root div in index.html
ReactDOM.render(
  <React.StrictMode>
    <AttendanceTracker />
  </React.StrictMode>,
  document.getElementById('root') // Ensure your public/index.html contains <div id="root"></div>
);
