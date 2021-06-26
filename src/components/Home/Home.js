import React, { useContext, useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Blog from '../Blog/Blog';
import { myContext } from '../../App';

const Home = () => {
    const { blogState } = useContext(myContext);
    const [blogs, setBlogs] = blogState;
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch('http://localhost:5000/blogs')
        .then(res=> res.json())
        .then(data=>{
            setBlogs(data)
            setLoading(false)
        })
        .catch(err=>console.log(err))
    },[blogs.length])
    
    return (
        <div>
            <div className="container px-10">
                <div className="header pt-5 grid grid-cols-2">
                    <div className="logo text-left">
                        <h3 className="text-2xl text-blue-500 font-bold">Bloguest</h3>
                    </div>
                    <div className="button text-right">
                        <Link to="/admin" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Admin</Link>
                    </div>
                </div>
                <div className="body">
                    <div className="search-box w-3/4 mx-auto mt-10">
                        <input class="w-3/4 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Search" />
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Search</button>
                    </div>
                    <div className="blogs py-10">
                        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            {
                                loading?<div className="text-blue-500 text-2xl font-bold">Loading...</div>:
                                blogs.map((blog, index) => <Blog blog={blog} key={index}></Blog>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;