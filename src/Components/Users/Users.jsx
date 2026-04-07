import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const user = useLoaderData();
    console.log("user data ", user);
    return (
        <div>
            <h3>Users</h3>
        </div>
    );
};

export default Users;