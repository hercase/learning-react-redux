import React from 'react';
import { connect } from "react-redux";
import './style.css';

function Results(objeto) {
    return(
        <div className='results'>
            { objeto.value }
        </div>
    );
};

const mapStateToProps = state => {
    return { value: state.contador };
};

const Page = connect(mapStateToProps)(Results);

export default Page;