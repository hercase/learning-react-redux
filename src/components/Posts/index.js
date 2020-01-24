import React, {useState} from 'react';
import './styles.css'

function Posts(props){

    const initialState = {
        title: '',
        body: ''
      };

    const [ Form, setForm ] = useState(initialState);

    const handleInputChange = e => {
        setForm({...Form, [e.target.name]: e.target.value})
      };
    
    const handleSubmit = e => {
        e.preventDefault();
        if ( Form.title && Form.body ){
            console.log(Form)
        } else {
            console.log('Falta completar un campo.')
        }
    };

    return(
        <div className="posts">
            <div className="title">Posts Example</div>
            <form className="form" onSubmit={ handleSubmit }>
                <input placeholder='Title' type="text" name="title" className="post-title" onChange={ handleInputChange }/>
                <input placeholder='Body' type="text-area" name="body" className="post-text" onChange={ handleInputChange }/>
                <div className='add-reset-buttons'> 
                <button className="post-add btn btn-success mr-1" type="submit">Add Post</button>
                <button className="post-reset btn btn-secondary" type='reset' onClick={ () => setForm(initialState) }>Reset</button>
                </div>
                <button className="post-display btn btn-primary">Display Posts</button>
            </form>
        </div>
    );
}

export default Posts;