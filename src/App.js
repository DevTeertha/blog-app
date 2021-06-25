import React, { useState, createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import ViewBlog from './components/ViewBlog/ViewBlog';
import Login from './components/Admin/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const myContext = createContext();

const App = () => {
  const [user, setUser] = useState(true)

  return (
    <myContext.Provider value={{
      userState: [user, setUser]
    }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/blog/:id">
            <ViewBlog></ViewBlog>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute to="/admin">
            <Admin></Admin>
          </PrivateRoute>
        </Switch>
      </Router>
    </myContext.Provider>
  );
}

export default App;
