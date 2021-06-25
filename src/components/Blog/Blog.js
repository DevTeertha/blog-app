import React from 'react';
import { Link } from "react-router-dom";
import { blogs } from '../../FakeData';


const Blog = ({ blog }) => {
    const { id, title, description, img } = blog;
    return (
        <Link to={`/blog/${id}`} class="transition duration-400 hover:border-blue-500 border-opacity-100 rounded overflow-hidden shadow-lg border">
            <img class="w-full" class="lazy" src={img} alt="Mountain" />
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2"> {title} </div>
                <p class="text-gray-700 text-base"> {description.slice(0,100)}...See More </p>
            </div>
        </Link>
    );
};

export default Blog;