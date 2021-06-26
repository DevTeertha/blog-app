import React, { useState } from 'react';

const DeleteCard = ({ blog }) => {
    const { _id, title, description, img } = blog;
    const [loading, setLoading] = useState(false)

    const deleteHandler = (id) => {
        setLoading(true)
        fetch(`https://powerful-depths-41881.herokuapp.com/deleteBlog/${_id}`, {
            method: 'DELETE'
        })
            .then(res => {
                setLoading(false);
                alert(title+" Successfully Deleted")
            })
    }
    return (
        <div className="bg-white transition duration-400 hover:border-red-500 border-opacity-100 rounded overflow-hidden shadow-lg border">
            <img class="w-full" className="lazy" src={`data:image/jpeg;base64,${img.img}`} alt="Mountain" />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2"> {title} </div>
                <p className="text-gray-700 text-base"> {description.slice(0, 100)}...See More </p>
                {
                    loading ? <button type="button" class="my-5 w-full bg-red-400 text-white font-bold py-2 px-4 rounded focus:outline-none disabled:opacity-50" disabled>Loading...</button>
                        :
                        <button onClick={() => deleteHandler(_id)} className="my-5 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Delete</button>
                }
            </div>
        </div>
    );
};

export default DeleteCard;