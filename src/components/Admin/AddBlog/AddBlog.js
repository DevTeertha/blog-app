import React, { useContext } from 'react';
import { myContext } from '../../../App';

const AddBlog = () => {
    const { blogState } = useContext(myContext);
    const [addBlog, setAddBlog] = blogState;

    let newAddBlog = { ...addBlog }
    const onBlurHandler = (e) => {
        if (e.target.name === "img") {
            newAddBlog[e.target.name] = e.target.files[0];
            setAddBlog(newAddBlog);
        }
        else {
            newAddBlog[e.target.name] = e.target.value;
            setAddBlog(newAddBlog);
        }
    }

    const submitHandler = (e, blog) => {
        e.preventDefault();
        console.log("Submitted ", blog)
    }

    return (
        <div className="mt-5">
            <div className="w-4/6 mx-auto">
                <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Title</label>
                        <input name="title" onBlur={(e) => onBlurHandler(e)} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
                    </div>
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Description</label>
                        <textarea name="description" onBlur={(e) => onBlurHandler(e)} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Write your content" />
                    </div>
                    <div class="mb-4">
                        <input name="img" onChange={onBlurHandler} required id="file-input" type="file" />
                    </div>
                    <button onClick={(e) => submitHandler(e, addBlog)} type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
                </form>
            </div>
        </div>
    );
};

export default AddBlog;