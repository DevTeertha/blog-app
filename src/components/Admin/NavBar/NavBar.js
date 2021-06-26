import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <div>
            <nav className="text-left mt-10">
                <Link to="/" activeClassName="bg-blue-800" className="sm:text-xs md:text-sm p-3 my-3 lg:text-xl block text-white font-bold hover:bg-blue-800 rounded w-full">Home</Link>
                <Link to="/admin/addBlog" activeClassName="bg-blue-800" className="sm:text-xs md:text-sm lg:text-xl p-3 my-3 block text-white font-bold hover:bg-blue-800 rounded w-full">Add Blog</Link>
                <Link to="/admin/deleteBlog" className="p-3 my-3 block sm:text-xs md:text-sm lg:text-xl text-white font-bold hover:bg-blue-800 rounded w-full">Delete Blog</Link>
            </nav>
        </div>
    );
};

export default NavBar;