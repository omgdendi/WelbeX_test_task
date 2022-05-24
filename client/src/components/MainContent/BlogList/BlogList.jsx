import React from 'react';
import Blog from "./Blog/Blog";

const BlogList = (props) => {
    let blog = props.blogs[0];
    return (
        <section>
            <Blog message={blog.message} createdAt={blog.createdAt} userId={blog.userId} img={blog.img} video={blog.video}/>
        </section>
    );
};

export default BlogList;