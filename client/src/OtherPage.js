import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <div>
          Im some other div!
          <Link to="/">Go Home</Link>  
        </div>
    );
};