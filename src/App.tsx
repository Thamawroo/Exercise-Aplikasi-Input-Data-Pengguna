import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Define other routes here */}
          <Route path="/register" component={RegisterPage} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
