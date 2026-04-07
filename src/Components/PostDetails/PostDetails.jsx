import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const post = useLoaderData();
    console.log("im post details ", post);
    const {body, title} = post;
    const postDetailStyle = {
        maxWidth: "400px"
    }
    return (
        <div style={postDetailStyle}>
           <h2>Post details</h2> 
           <h4>{title}</h4>
           <p><small>{body}</small></p>
        </div>
    );
};

export default PostDetails;