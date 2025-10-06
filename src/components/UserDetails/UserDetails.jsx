import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const{website, name, email} = user;

    const params = useParams();
    console.log(params);
    return (
        <div>
            <h3>Users Details Available Here</h3>
            <h4>Name: {name}</h4>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
        </div>
    );
};

export default UserDetails;