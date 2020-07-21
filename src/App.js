import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Course from './pages/course/course.component';
import RightPanel from './components/RightPanel/right-panel.component';
import Courses from './pages/courses/courses.component';

function App(props) {
  return (
    <div className="App">
      <Router>
        <RightPanel/>
        <Switch>
          <Route path='/course' component={Course} />
          <Route path='/courses' component={Courses} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
