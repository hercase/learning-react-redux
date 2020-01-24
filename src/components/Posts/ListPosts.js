import React from 'react';
import { connect } from 'react-redux';
import Post from './Post';

function Posts(props){    
    return (
        <div className='list-posts'>
            <div className="title">Posts Example</div>
            { props.value.map( ( post ) => { 
                    return( <Post id={ post.id } key={ post.id } title={ post.title } body={ post.body }/> )
                })
            }
        </div>
    );
}

const mapStateToProps = state => {
    return{ value: state.postReducer }
};

const ListPosts = connect(mapStateToProps)(Posts);

export default ListPosts;