import React from 'react';
import { connect } from 'react-redux';

function Posts(props){    
    return (
        <div className='list-posts'>
            <div className="title">Posts Example</div>
            { props.value.map( ( post ) => { 
                    return( 
                    <div className='card m-2' key={ post.id }>
                        <div className="card-header">
                            { post.title } <span className="badge badge-primary float-right">#{ post.id }</span>
                        </div>
                        <div className="card-body">{post.body}</div>
                    </div>
                    )
                }
                )
            }
        </div>
    );
}

const mapStateToProps = state => {
    return{ value: state.postReducer }
};

const ListPosts = connect(mapStateToProps)(Posts);

export default ListPosts;