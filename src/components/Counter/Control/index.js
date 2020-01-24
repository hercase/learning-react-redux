import React from 'react';
import { connect } from 'react-redux';
import { incrVal, decrVal } from '../../../actions/actions'
import './style.css'

function Control (props) {
    return (
        <div className='control'>
            <div className='title'>
                Counter Example
            </div>
            <div className='buttons'>
            <button onClick={() => props.incrVal()} className='button'>+</button>
            <button onClick={() => props.decrVal()} className='button'>-</button>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
      contador: state,
    };
  };
  
  export default connect(mapStateToProps,
    { incrVal, decrVal },
    )(Control);
