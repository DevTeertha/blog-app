import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <nav className="text-left mt-10">
            <Link to="/" activeClassName="bg-blue-800" className="p-3 my-3 text-xl block text-white font-bold hover:bg-blue-800 rounded w-full">Home</Link>
                <Link to="/admin/addBlog" activeClassName="bg-blue-800" className="p-3 my-3 text-xl block text-white font-bold hover:bg-blue-800 rounded w-full">Add Blog</Link>
                <Link to="/admin/deleteBlog" className="p-3 my-3 text-xl block text-white font-bold hover:bg-blue-800 rounded w-full">Delete Blog</Link>
            </nav>
        </div>
    );
};

export default NavBar;