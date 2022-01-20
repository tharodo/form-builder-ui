import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import FormTemplates from './components/FormTemplates/FormTemplates';

function App() {
  return (
    <Router>
      <div className="App">
        <Route
          path="/form"
          component={FormTemplates}
        />
        {/* <FormTemplates /> */}
      </div>
    </Router>
  );
}

export default App;
