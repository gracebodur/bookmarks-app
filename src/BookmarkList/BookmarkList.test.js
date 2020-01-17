import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkList from './BookmarkList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  // const props = {
  //   id:'',
  //   title:'',
  //   url:'',
  //   rating: 1,
  //   description: ''
  // }
  ReactDOM.render(<BookmarkList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
