import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/actions'
import './styles.css'

function AddPosts(props){

    const [ Form, setForm ] = useState();

    const handleInputChange = e => {
        setForm({ ...Form, [e.target.name]: e.target.value})
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if ( Form.title && Form.body ){
            let data = {};
            let index = props.posts.length;
            if (!index) {
                data = { 
                    id: 1, 
                    title: Form.title, 
                    body: Form.body
                }
            } else {
                data = {
                    id: props.posts[index-1].id + 1,
                    title: Form.title,
                    body: Form.body
                }
            }
            props.addPost(data);
        } else {
            console.log('Falta completar un campo.')
        }
    };

    return(
        <div className="add-posts">
            <form className="form" onSubmit={ handleSubmit }>
                <input placeholder='Title' type="text" name="title" className="post-title" onChange={ handleInputChange }/>
                <input placeholder='Body' type="text-area" name="body" className="post-text" onChange={ handleInputChange }/>
                <div className='add-reset-buttons'> 
                <button className="post-add btn btn-success mr-1" type="submit">Add Post</button>
                <button className="post-reset btn btn-secondary" type='reset' onClick={ () =>  {console.log(props.posts.pop());}  }>Reset</button>
                </div>
                <button className="post-display btn btn-primary">Display Posts</button>
            </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      posts: state.postReducer,
    };
  };

export default connect(mapStateToProps,
    { addPost },
    )(AddPosts);