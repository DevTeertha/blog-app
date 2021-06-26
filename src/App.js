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
import AddBlog from './components/Admin/AddBlog/AddBlog';

export const myContext = createContext();

const App = () => {
  const [user, setUser] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [addBlog, setAddBlog] = useState({
    title: "",
    description: ""
  });
  const [file, setFile] = useState(null);

  return (
    <myContext.Provider value={{
      userState: [user, setUser],
      addBlogState: [addBlog, setAddBlog],
      fileState: [file, setFile],
      blogState: [blogs, setBlogs]
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
