import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/actions'
import './styles.css'

function AddPosts(props){

    const [ Form, setForm ] = useState();
    const [ Alert, setAlert ] = useState(false);

    const handleInputChange = e => {
        setForm({ ...Form, [e.target.name]: e.target.value})
        setAlert(false);
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        if ( Form ){
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
            setAlert(true);
        }
    };

    return(
        <div className="add-posts">
            <form className="form" onSubmit={ handleSubmit }>
                <input placeholder='Title' type="text" name="title" className="post-title" onChange={ handleInputChange }/>
                <input placeholder='Body' type="text-area" name="body" className="post-text" onChange={ handleInputChange }/>
                <div className='add-reset-buttons'> 
                <button className="post-add btn btn-success mr-1" type="submit">Add Post</button>
                <button className="post-reset btn btn-secondary" type='reset'>Reset</button>
                </div>
                {/* <button className="post-display btn btn-primary">Display Posts</button> */}
            </form>
            { Alert && <div className="alert alert-danger m-3 small" role="alert"> Debe ingresar un titulo y un mensaje.</div> }
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