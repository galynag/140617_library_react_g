import React, {Component} from 'react';
import {Link} from 'react-router'

export default class AuthorsList extends Component {
    render() {
        return(
            <ul>
                <li><Link to="/authors/booklist">author 1</Link></li>
                <li><Link to="/authors/booklist">author 2</Link></li>
                <li><Link to="/authors/booklist">author 3</Link></li>
                <li><Link to="/authors/booklist">author 4</Link></li>
                <li><Link to="/authors/booklist">author 5</Link></li>
                <li><Link to="/authors/booklist">author 6</Link></li>
                <li><Link to="/authors/booklist">author 7</Link></li>
            </ul>
        )
    };
};
