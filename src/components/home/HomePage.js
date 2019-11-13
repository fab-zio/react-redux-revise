import React from 'react';
import { Link } from 'react-router-dom';
//functional Component
const HomePage = () => (

    <div className='jumbotron'>
        <h1>Plurasight Administration</h1>
        <p>React, Redux and React router for ultra-responsive web app.</p>
        <Link to="about" className="btn btn-primary btn-lg">
            Learn more
        </Link>
    </div>
)

export default HomePage;