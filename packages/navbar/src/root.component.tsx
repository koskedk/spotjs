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
                    <div className="logo">
                    </div>
                        <ul>
                            <Route>
                                <li><NavLink to={"/globe/"} activeClassName="active">Globe</NavLink></li>
                                <li><NavLink to={"/stats/"}>Stats</NavLink></li>
                            </Route>
                        </ul>
                </div>
            </HashRouter>);
    }
}
