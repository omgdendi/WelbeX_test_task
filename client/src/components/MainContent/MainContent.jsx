import React, {useState} from 'react';
import BlogListContainer from "./BlogList/BlogListContainer";
import styles from "./MainContent.module.scss";
import Dialog from "./Dialog/Dialog";

const MainContent = () => {
    const [show, setShow] = useState(false);


    return (
        <div className={styles.content}>
            <div>
                <div className={styles.create} onClick={() => setShow(true)}>Создать пост</div>
            </div>
            {show ? <Dialog setShow={setShow}/> : null}
            <BlogListContainer/>
        </div>
    );
};

export default MainContent;