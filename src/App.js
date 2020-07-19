import React from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Course from './pages/course/course.component';
import RightPanel from './components/RightPanel/right-panel.component';

function App() {
  return (
    <div className="App">
      <Router>
        <RightPanel/>
        <Switch>
          <Route path='/course' component={Course} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
