import React, { Component } from 'react';
import BookmarksContext from '../BookmarksContext'
import BookmarkItem from '../BookmarkItem/BookmarkItem';
import PropTypes from 'prop-types'
import './BookmarkList.css'

class BookmarkList extends Component {
  // static defaultProps = {
  //   bookmarks: []
  // };
  static contextType = BookmarksContext
  render() {
    // const { bookmarks } = this.props
    return (
      <section className='BookmarkList'>
        <h2>Your bookmarks</h2>
        <ul className='BookmarkList__list' aria-live='polite'>
          {/* {bookmarks.map(bookmark => */}
            <BookmarkItem value={'contextType'} />
        </ul>
      </section>
    );
  }
}

BookmarkList.propTypes = {
  bookmarks: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
      ]).isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
    rating: PropTypes.number,
    description: PropTypes.string,
  })).isRequired
};

export default BookmarkList;
