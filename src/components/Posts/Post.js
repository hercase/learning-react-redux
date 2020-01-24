import React from 'react';

const Post = props => {
    return(
        <div className='card m-2' >
            <div className="card-header">
                { props.title } <span className="badge badge-primary float-right">#{ props.id }</span>
            </div>
            <div className="card-body">{props.body}</div>
        </div>
    );
}

export default Post;