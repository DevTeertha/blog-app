import React, { useContext, useState } from 'react';
import LoadingOverlay from 'react-loading-overlay';
import { myContext } from '../../../App';

const AddBlog = () => {
    const { addBlogState, fileState } = useContext(myContext);
    const [addBlog, setAddBlog] = addBlogState;
    const [file, setFile] = fileState;
    const [loading, setLoading] = useState(false)

    let newAddBlog = { ...addBlog }

    const onBlurHandler = (e) => {
        newAddBlog[e.target.name] = e.target.value;
        setAddBlog(newAddBlog);
    }

    const onChangeHandler = (e) => {
        setFile(e.target.files[0])
    }

    const submitHandler = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('title', addBlog.title);
        formData.append('description', addBlog.description);
        setLoading(true);
        fetch('http://localhost:5000/addBlog', {
            method: 'post',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                e.target.reset();
                setAddBlog({
                    title: "",
                    description: ""
                });
                setFile(null)
                alert("Blog Added Successfully")
                setLoading(false)
            })
            .catch(err => console.log(err))
        e.preventDefault();
    }

    return (
        <LoadingOverlay
            active={loading}
            text='Loading...'
            spinner
        >
            <div style={{height: '100vh'}} className="pt-5">
                <div className="w-4/6 mx-auto">
                    <form onSubmit={submitHandler} class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 border">
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Title</label>
                            <input name="title" onBlur={(e) => onBlurHandler(e)} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
                        </div>
                        <div class="mb-4">
                            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Description</label>
                            <textarea name="description" onBlur={(e) => onBlurHandler(e)} required class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Write your content" />
                        </div>
                        <div class="mb-4">
                            <input name="img" onChange={onChangeHandler} required id="file-input" type="file" />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add</button>
                    </form>
                </div>
            </div>
        </LoadingOverlay>
    );
};

export default AddBlog;