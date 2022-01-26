import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import FormTemplates from './components/FormTemplates/FormTemplates';
import NewForm from './components/FormCreate/NewForm';

function App() {
  return (
    <Router>
      {/* <ShowList/> */}
      <div className="App">
        <Switch>
          <Route
            path="/forms"
            exact
            component={FormTemplates}
          />       
          <Route
            exact
            path="/forms/create"
            component={NewForm}
          />   
        </Switch>

      </div>
    </Router>
  );
}

export default App;
