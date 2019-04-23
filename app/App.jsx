import React from 'react'
import importComponent from 'react-imported-component';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home.jsx'
import LoadingComponent from './pages/Loading'
import ErrorComponent from './pages/Error'
import Header from './components/Header'
import { GlobalStyles } from './styles'
const About = importComponent(() => import("./pages/About"), {
    LoadingComponent,
    ErrorComponent
});
const App = () => (
    <React.Fragment>
        <GlobalStyles />
        <Header />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" render={() => <About />} />
            <Redirect to="/" />
        </Switch>
    </React.Fragment>
)
export default App