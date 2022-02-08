import React from "react";

// import './BlogCard.css';
import classes from './BlogCard.module.css';

import { dumpLogs } from "./Utils";

const BlogCard = (props) => {
    dumpLogs(props)

    // onLikeBtnClick = () => {
    //     let count = state.like;
    //     count++;
    //     setState({ like: count });
    // }


    return (
        <div className={classes.BlogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>

            <p>Like Count: <span className={classes.likeCount}>{props.likeCount}</span></p>
            <button onClick={props.onLikeBtnClick}>Like</button>
        </div>
    );
};

export default BlogCard;