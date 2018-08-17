import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {

    // Like below we can set the app base url
    //<BrowserRouter basename="/app/">

    return (

      <BrowserRouter>
        <div className="App">
          <Blog/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
