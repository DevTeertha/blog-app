import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../../FakeData';
import { myContext } from '../../App';

const ViewBlog = () => {
    const { id } = useParams();
    const { blogState } = useContext(myContext);
    const [blogs] = blogState;

    const blog = blogs.find(blog=>blog._id===id);

    const { title, description, img } = blog;
    return (
        <div className="container px-10">
            <Link to="/"><button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to home</button></Link>
            <div className="p-10">
                <img className="w-5/12 mx-auto" src={`data:image/jpeg;base64,${img.img}`} alt={id} />
                <h1 className="text-center text-3xl mt-5 font-bold text-blue-500"> {title} </h1>
                <p className="mt-5 text-gray-600 text-justify"> {description} </p>
            </div>
        </div>
    );
};

export default ViewBlog;