import React from 'react';

const Post = props => {
    return(
        <div className='card m-2' >
            <div className="card-header">
                <span className="badge badge-primary">#{ props.id }</span>
                <h5 class="card-title">{ props.title }</h5>
                <button className="btn btn-danger btn-sm float-right"><i class="fas fa-trash-alt"></i></button>
                <button className="btn btn-info btn-sm float-right"><i class="fas fa-edit"></i></button>
            </div>
            <div className="card-body">{props.body}</div>
        </div>
    );
}

export default Post;