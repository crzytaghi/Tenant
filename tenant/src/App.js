import React from 'react';

class App extends React.Component {
  state = {
    username:'Kyle'
  }

  render = () => {
    return (
    <div className="container">
      <div className="sidebar">
        <h1>Tenant</h1>
        <h2>Welcome {this.state.username}</h2>
      </div>
      <div className="main">
        
      </div>
    </div>
    )
  }
}

export default App;
