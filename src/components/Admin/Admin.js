import React from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AddBlog from './AddBlog/AddBlog';
import DeleteBlog from './DeleteBlog/DeleteBlog';
import BlogList from './BlogList/BlogList';
import NavBar from './NavBar/NavBar';

const style = {
    height: '100%'
}

const Admin = () => {
    return (
        <div style={style} className="bg-gray-100">
            <div style={style} className="flex">
                <div style={style} className="bg-blue-500 w-2/12">
                    <NavBar></NavBar>
                </div>
                <div className="flex-initial border w-11/12">
                    <Switch>
                        <Route exact path="/admin">
                            <AddBlog></AddBlog>
                        </Route>
                        <Route path="/admin/addBlog">
                            <AddBlog></AddBlog>
                        </Route>
                        <Route path="/admin/blogList">
                            <BlogList></BlogList>
                        </Route>
                        <Route path="/admin/deleteBlog">
                            <DeleteBlog></DeleteBlog>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
};

export default Admin;