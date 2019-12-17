import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import FriendCard from './FriendCard';

function FriendsList() {
    const [myFriends, setMyFriends] = useState([])

    const getData = () => {
        axiosWithAuth()
        .get('/friends')
        .then(res => {
            console.log(res);
            setMyFriends(res.data);
            console.log(myFriends);
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getData();
    }, [])
    
    return (
        <div>
            <h1>My Friends</h1>
            {myFriends.map((f, index) => {
                return (
                    <FriendCard
                        key={index}
                        name={f.name}
                        age={f.age}
                    />
                )
            })}
        </div>
    )
}

export default FriendsList;