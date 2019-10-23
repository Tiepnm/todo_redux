import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import {BrowserRouter as Router, NavLink, Route, Switch} from "react-router-dom";
import Bar from "./Bar";
import Foo from "./Foo";


const App = () => (
  <div>

    <Router>
      <main>

        <ul>
          <li><NavLink to="/bar"> Bar</NavLink></li>
          <li><NavLink to="/foo"> Foo</NavLink></li>
        </ul>

      </main>

      <AddTodo/>
      <VisibleTodoList/>
      <Footer/>


      <p/>
      <Switch>
        <Route path="/" exact component={Bar}/>
        <Route path="/bar" exact component={Bar}/>
        <Route path="/foo" exact component={Foo}/>
      </Switch>
    </Router>
  </div>
)

export default App
