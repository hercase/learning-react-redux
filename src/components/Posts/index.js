import React from 'react';

function Posts(props){
    return(
        <div className="posts">
            <div className="title">Posts</div>
            <div className="form">
                <input type="text" />
                <button>Display Posts</button>
                <input type="text-area" />
                <button>Add Posts</button>
                <button>Reset</button>
            </div>
        </div>
    );
}

export default Posts;