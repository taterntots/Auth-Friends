import React from 'react';

function FriendCard (props) {
    return (
        <div className='friend-info'>
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    )
}

export default FriendCard;