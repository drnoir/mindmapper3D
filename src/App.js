import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import './App.css';
import '@progress/kendo-theme-default/dist/all.css';
import {AppBar, AppBarSection, AppBarSpacer, Avatar} from '@progress/kendo-react-layout';
import {Icon} from '@progress/kendo-react-common';
import {BrowserRouter as Router, Route, Link, Switch,} from 'react-router-dom'
import About from "./components/About";
import AppBanner from "./components/AppBanner";
import {Loader} from '@progress/kendo-react-indicators';
import MindMap from "./MindMap";

let UserAvatar = '/img/av.jpg';

function App() {
    return (
<Router>
        <div className="App">
            <div className="App">
                <AppBar>
                    <AppBarSpacer style={{width: 4}}/>
                    <AppBarSection>
                        <img src={'/img/icon.png'} alt={"MindMapper3D"} width={50}/>
                        <h1>
                            {/*<Icon name='dictionary-add' size="xlarge"/>*/}
                            <Link to="/" className="app-header">MindMapper 3D</Link></h1>
                    </AppBarSection>
                    <AppBarSpacer style={{width: 32}}/>
                    <AppBarSection>
                        <ul>
                            <li><Link to="/"> <Icon name='information' size="medium"/> About</Link></li>
                            <li><Link to="/MindMap"> <Icon name='change-manually' size="medium"/> MindMap</Link></li>
                        </ul>
                    </AppBarSection>
                </AppBar>
            </div>
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/MindMap">
                    <MindMap/>
                </Route>
            </Switch>
        </div>
    </Router>
    );
}

export default App;
