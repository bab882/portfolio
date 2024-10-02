// src/pages/ServerError.js
import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="container">
            <div className="col-12 d-flex justify-content-center align-items-center vh-100">
                <div className='className="text-center"' style={{color: '#fefefe'}}>
                    <h1>404 | This page could not be found. </h1>
                    <Link className='btn btn1' to="/" style={{left: '35%'}}>Return</Link>
                </div>
            </div>
        </div>
        
    );
}

export default NotFound;
