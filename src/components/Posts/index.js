import React from 'react';
import './styles.css'

function Posts(props){
    return(
        <div className="posts">
            <div className="title">Posts</div>
            <div className="form">
                <input placeholder='Title' type="text" className="post-title" />
                <button className="post-display">Display Posts</button>
                <input placeholder='Body' type="text-area" className="post-text"/>
                <button className="post-add">Add Post</button>
                <button className="post-reset">Reset</button>
            </div>
        </div>
    );
}

export default Posts;