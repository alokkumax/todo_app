import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Todo from './components/Todo';
import NavBar from './components/NavBar';
import ListTodos from './components/ListTodo';

function App() {
  return (
    <Router>
    <div>
      <NavBar/>
      <div>
      <Routes>
        <Route exact path="/" element={<Todo/>}/>
      </Routes>
      </div>
      <ListTodos/>
    </div>
    </Router>
  );
}

export default App;
