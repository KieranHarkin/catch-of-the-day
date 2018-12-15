import React from 'react';

const Login = props => (
  <nav className="login">
    <h2>Inventory Login</h2>
    <p>Sign in to manage your stores inventory.</p>
    <button className="facebook" onClick={() => props.authenticate('Facebook')}>
      Login with Facebook
    </button>
    <button className="twitter" onClick={() => props.authenticate('Twitter')}>
      Login with Twitter
    </button>
  </nav>
);

export default Login;
