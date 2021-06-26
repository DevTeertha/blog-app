import React from 'react';
import { Link } from "react-router-dom";


const Blog = ({ blog }) => {
    const { _id, title, description, img } = blog;
    return (
        <Link to={`/blog/${_id}`} className="transition duration-400 hover:border-blue-500 border-opacity-100 rounded overflow-hidden shadow-lg border">
            <img class="w-full" className="lazy" src={`data:image/jpeg;base64,${img.img}`} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> {title} </div>
                <p className="text-gray-700 text-base"> {description.slice(0,100)}...See More </p>
            </div>
        </Link>
    );
};

export default Blog;