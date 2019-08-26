import React from 'react'
import {Component} from 'react';
import {BrowserRouter, HashRouter, Link, Route, Switch} from "react-router-dom";
import './navbar.css'

export class Root extends Component<any, any> {

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error(error, errorInfo)
    }

    render() {
        return (
            <HashRouter>
                <div className="navh">
                    <div className="navl">
                        <Route>

                                <Link to={"/stats/"}>Stats</Link>&nbsp;|&nbsp;
                                <Link to={"/globe/"}>Globe</Link>

                        </Route>
                    </div>
                </div>
            </HashRouter>);
    }
}
