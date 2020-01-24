import React from 'react';
import { connect } from "react-redux";

const Results = props => {
    return(
        <div className='results'>
            { props.value.counter }
        </div>
    );
};

const mapStateToProps = state => {
    return { value: state.counterReducer };
};

const Page = connect(mapStateToProps)(Results);

export default Page;