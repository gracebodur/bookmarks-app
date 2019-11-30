import React from 'react';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Nav(props) {
  return (
    <nav className='Nav'>
    
      <Link to ={'/'}>
        Bookmark List
      </Link>
      {' '}
      <Link to ={'/add-bookmark'}>
        Add Bookmark
      </Link>

    </nav>
  );
}

Nav.propTypes = {
  history: PropTypes.object,
}