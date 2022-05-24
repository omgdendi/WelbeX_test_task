import React, {useEffect, useState} from 'react';
import {AppAPI} from "../../../../api/AppAPI";
import styles from "./Blog.module.scss";

const Blog = (props) => {
    const [username, setUsername] = useState(null);

    useEffect(() => {
        AppAPI.getUser(props.userId).then(response => {
            setUsername(response.data.username);
        })
    }, [])


    return (
        <div className={styles.content}>
            <div className={styles.header}>
                <div>
                    <span>{username}</span>
                </div>
                <div>
                    <span>{props.createdAt}</span>
                </div>
            </div>
            <div className={styles.main}>
                <div className={styles.message} style={props.message ? {display: "block"} : {display: "none"}}>
                    <span>{props.message}</span>
                </div>
                <div className={styles.img} style={props.img ? {display: "block"} : {display: "none"}}>
                    <img src={"http://localhost:8080/" + props.img} alt="image"/>
                </div>
                <video className={styles.video} width={300} style={props.video ? null : {display: "none"}}>
                    <source src="http://localhost:8080/2e7a2289-4cf6-4ec9-aa21-efb83fb505ca.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    );
};

export default Blog;