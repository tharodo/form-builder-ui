import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FormTemplates from "./components/FormTemplates/FormTemplates";
import NewForm from "./components/FormCreate/NewForm";
import { useState } from "react";
import axios from "axios";

function App() {
  // const [list, setList] = useState([]);

  // useEffect(() => {
  //   const fetchList = async () => {
  //     const params = {
  //       page: 1,
  //       pageSize:10
  //     }
  //     try {
  //       const response = await listApi.getAll();
  //       console.log(response)
  //     } catch (error) {
  //       console.log('Fail to fetch', error);
  //     } fetchList();
  //   }
  // }, [])

  // const axios = require('axios');



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/forms" exact component={FormTemplates} />
          <Route exact path="/forms/create" component={NewForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
