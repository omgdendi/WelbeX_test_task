import React from 'react';
import Blog from "./Blog/Blog";
import styles from "./BlogList.module.scss";

const BlogList = (props) => {
    return (
        <section>
            <div className={styles.myPosts}>
                <div className={styles.name}>
                    <span>Мои посты</span>
                </div>
                {props.blogs.map(blog => <Blog message={blog?.message} createdAt={blog.createdAt} userId={blog.author}
                                               img={blog.img} video={blog.video}/>)}
            </div>
            <div className={styles.notMyPosts}>
                <div className={styles.name}>
                    <span>Чужие посты</span>
                </div>
                {props.blogs.filter(blog => blog.id === props.user.id).map(blog => <Blog key={blog.id}
                                                                                         message={blog.message}
                                                                                         createdAt={blog.createdAt}
                                                                                         userId={blog.author}
                                                                                         img={blog.img}
                                                                                         video={blog.video}/>)}
            </div>
        </section>
    );
};

export default BlogList;