import React from 'react';

class Nav extends React.Component {
  render = () => {
    return (
    <nav>
      {(this.loggedIn) ? <h1>Tenant</h1> : <h2>Welcome Kyle</h2>}
      <ul className="nav-links">
        <li>About</li>
        <li>Home</li>
      </ul>
    </nav>
    )
  }
}

export default Nav;
