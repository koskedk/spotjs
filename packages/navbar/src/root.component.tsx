import React from 'react'
import {Component} from 'react';
import {BrowserRouter, Link} from "react-router-dom";

export class Root extends Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <div>
                    SPOT
                    <hr/>
                    <Link to={"/stats"}>Stats</Link>&nbsp;|&nbsp;
                    <Link to={"/globe"}>Globe</Link>
                </div>
            </BrowserRouter>);
    }
}
