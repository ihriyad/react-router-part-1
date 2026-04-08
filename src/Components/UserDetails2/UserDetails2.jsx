import React, { use } from 'react';

const UserDetails2 = ({userPromise}) => {
    const user = use(userPromise)
    const {name, username} = user;
    return (
        <div>
            <h4>{username}</h4>
            <p><small>Name: {name}</small></p>
        </div>
    );
};

export default UserDetails2;