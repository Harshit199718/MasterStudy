import React ,{usePath}from 'react';
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import Course from './pages/course/course.component';
import RightPanel from './components/RightPanel/right-panel.component';
import Courses from './pages/courses/courses.component';
import Profile from './pages/profile/profile.component';
import ViewCourse from './pages/view-course/view-course.component';
import AddCourse from './pages/add-course/add-course.component';
import MainFooter from './components/MainFooter/main-footer.component';
import MainHeader1 from './components/Header/MainHeader/MainHeader1/main-header1.component';

function App(props) {
  return (
    <div className="App">
      <Router>
        <RightPanel/>
          <MainHeader1 path={window.location.pathname}/>
        <Switch>
          <Route path='/course' component={Course} />
          <Route path='/courses' component={Courses} />
          <Route path='/profile' component={Profile} />
          <Route path='/view-course' component={ViewCourse} />
          <Route path='/add-course' component={AddCourse} />
        </Switch>
          <MainFooter path={window.location.pathname} />
      </Router>
    </div>
  );
}

export default App;
