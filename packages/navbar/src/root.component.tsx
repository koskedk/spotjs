import React from 'react'
import {Component} from 'react';
import {BrowserRouter, HashRouter, Link, NavLink, Route, Switch} from "react-router-dom";
import './navbar.scss'
export class Root extends Component<any, any> {

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error(error, errorInfo)
    }

    render() {
        return (
            <HashRouter>
                <div className="nav-top">
                    <a href="/">
                        <div className="logo">
                        </div>
                    </a>
                        <ul>
                            <Route>
                                <li><NavLink to={"/globe/"} activeClassName="active">Partners</NavLink></li>
                                <li><NavLink to={"/migration/"}>EMR Migration</NavLink></li>
                                <li><NavLink to={"/stats/"}>Facilities</NavLink></li>
                            </Route>
                        </ul>
                </div>
            </HashRouter>);
    }
}
