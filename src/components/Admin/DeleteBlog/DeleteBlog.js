import React, { useContext, useEffect, useState } from 'react';
import { myContext } from '../../../App';
import DeleteCard from './DeleteCard';

const DeleteBlog = () => {
    const { blogState } = useContext(myContext);
    const [blogs, setBlogs] = blogState;
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (blogs.length === 0) {
            fetch('http://localhost:5000/blogs')
                .then(res => res.json())
                .then(data => {
                    setBlogs(data)
                    setLoading(false)
                })
                .catch(err => console.log(err))
        }
    }, [blogs.length])

    return (
        <div>
            <div className="container p-10">
                <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                    {
                        loading ? <div className="text-blue-500 text-2xl font-bold">Loading...</div> :
                            blogs.map((blog, index) => <DeleteCard blog={blog} key={index}></DeleteCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default DeleteBlog;