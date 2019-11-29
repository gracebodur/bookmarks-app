import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import AddBookmark from './AddBookmark/AddBookmark';
import BookmarkList from './BookmarkList/BookmarkList';
import BookmarksContext from './BookmarksContext'
import Nav from './Nav/Nav';
import config from './config';
import './App.css';

const bookmarks = [
  // {
  //   id: 0,
  //   title: 'Google',
  //   url: 'http://www.google.com',
  //   rating: '3',
  //   desc: 'Internet-related services and products.'
  // },
  // {
  //   id: 1,
  //   title: 'Thinkful',
  //   url: 'http://www.thinkful.com',
  //   rating: '5',
  //   desc: '1-on-1 learning to accelerate your way to a new high-growth tech career!'
  // },
  // {
  //   id: 2,
  //   title: 'Github',
  //   url: 'http://www.github.com',
  //   rating: '4',
  //   desc: 'brings together the world\'s largest community of developers.'
  // }
];

class App extends Component {
  state = {
    page: 'list',
    //bookmarks, //swap with context
    error: null,
  };

  changePage = (page) => {
    this.setState({ page })
  }

  setBookmarks = bookmarks => {
    this.setState({
      bookmarks,
      error: null,
      page: 'list',
    })
  }

  addBookmark = bookmark => {
    this.setState({
      bookmarks: [ ...this.state.bookmarks, bookmark ],
    })
  }
  deleteBookmark = bookmarkId => {
    console.log(bookmarkId)
    // todo: remove bookmark with bookmarkId from state
    const newBookmarks = this.state.bookmarks.filter(bm =>
      bm.id !== bookmarkId
    )
    this.setState({
      bookmarks: newBookmarks
    })
  }

  componentDidMount() {
    fetch(config.API_ENDPOINT, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'Authorization': `Bearer ${config.API_KEY}`
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setBookmarks)
      .catch(error => this.setState({ error }))
  }

  render() {
   // const { bookmarks } = this.state
   const contextValue = {
     bookmarks: this.state.bookmarks,
     addBookmark: this.addBookmark,
     deleteBookmark: this.deleteBookmark,
   }
    return (
      <main className='App'>
        <h1>Bookmarks!</h1>
        <BookmarksContext.Provider value={contextValue}>
        <Nav clickPage={this.changePage} />
        <div className='content' aria-live='polite'>
        <Route path='/add-bookmark'> <AddBookmark />  </Route>
              
            {/* // render={({ history }) => { */}
            {/* //   return <AddBookmark
            //     onAddBookmark={this.addBookmark}
            //     onClickCancel={() => history.push('/')}
            //   />
            // }}
          /> */}
          <Route
            exact
            path='/'><BookmarkList /></Route>
          {/* //   render={({ history }) => {
          //     return <BookmarkList bookmarks={bookmarks} />
          //   }}
          // /> */}
        </div>
        </BookmarksContext.Provider>
      </main>
    );
  }
}

export default App;