import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div className="container px-10">
                <div className="header mt-5 grid grid-cols-2">
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
                    <div className="blogs">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;