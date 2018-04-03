import React, {Fragment} from 'react'
import ReactDOM from 'react-dom'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import { ApolloProvider } from 'react-apollo'
import ApolloClient from 'apollo-boost'

import FeedPage from './components/FeedPage'
import DraftsPage from './components/DraftsPage'
import CreatePage from './components/CreatePage'
import DetailPage from './components/DetailPage'
import PlayerList from './pages/PlayerList'
import Home from './pages/Home'
import Playerpage from './pages/Playerpage'
import Lifts from './pages/Lifts'
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import 'tachyons'
import './index.css'

const client = new ApolloClient({ uri: 'http://localhost:4000' })

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Playerlist" component={PlayerList} />
            <Route path="/Playerpage" component={Playerpage} />
            <Route path="/Lifts" component={Lifts} />
          </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById('root'),
)
