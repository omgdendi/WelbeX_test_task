import React from 'react';
import BlogListContainer from "./BlogList/BlogListContainer";
import styles from "./MainContent.module.scss";

const MainContent = () => {
    return (
        <div className={styles.content}>
            <BlogListContainer/>
        </div>
    );
};

export default MainContent;