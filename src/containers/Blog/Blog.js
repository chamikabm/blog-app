import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect } from 'react-router-dom';
import './Blog.css';

import asyncComponent from '../../hoc/asyncComponent';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/posts" exact>Home</NavLink></li>
              <li><NavLink to="/new-post">New Post</NavLink></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={AsyncNewPost} />
          <Route path="/posts" component={Posts} />
          {/* from and to only works in Redirect when it is inside the Switch block. */}
          <Redirect from="/" to="/posts" />
          {/*<Route path="/" component={Posts}/>*/}
        </Switch>
      </div>
    );
  }
}

export default Blog;