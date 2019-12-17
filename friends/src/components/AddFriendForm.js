import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

function AddFriendForm (props) {
    const [newFriend, setNewFriend] = useState({
        name: '',
        age: '',
        email: ''
    })

    const addFriend = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(res => {
                console.log(res);
                props.addNewFriend(res.data);
            })
    }

    // const removeFriend = event => {
    //     event.preventDefault();
    //     axiosWithAuth()
    //         .delete(`/friends/&{id}`)
    //         .then(res => {
    //             console.log(res);
    //         })
    // }

    const handleChange = event => {
        event.preventDefault();
        setNewFriend({
            ...newFriend,
            [event.target.name]: event.target.type === 'number' ? +event.target.value: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={addFriend}>
                <input 
                    type='text'
                    name='name'
                    placeholder='name'
                    value={newFriend.name}
                    onChange={handleChange}
                />
                <input 
                    type='number'
                    name='age'
                    placeholder='age'
                    value={newFriend.age}
                    onChange={handleChange}
                />
                <input 
                    type='text'
                    name='email'
                    placeholder='email'
                    value={newFriend.email}
                    onChange={handleChange}
                />
                <button type='submit'>Add Friend</button>
            </form>
        </div>
    )
}

export default AddFriendForm;