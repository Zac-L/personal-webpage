import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class Header extends PureComponent {

  render() {

    return(
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

export default connect(
  state => ({}),
  null
)(Header);