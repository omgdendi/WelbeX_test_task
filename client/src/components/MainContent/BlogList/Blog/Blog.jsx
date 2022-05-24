import React from 'react';

const Blog = (props) => {
    return (
        <div>
            <div>
                <span>{props.message}</span>
            </div>
            <div>
                <span>{props.createdAt}</span>
            </div>
            <div>
                <span>{props.userId}</span>
            </div>
            <div>
                <span>{props.img}</span>
            </div>
            <div>
                <span>{props.video}</span>
            </div>
        </div>
    );
};

export default Blog;