import React, {Component} from 'react';
import {Link} from 'react-router';

export default class MainLayout extends Component {
    render() {
        return(
            <div className="container">
                <aside>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/authors">Authors</Link></li>
                        <li><Link to="/genres">Genres</Link></li>
                    </ul>
                </aside>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    };
};