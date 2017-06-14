import React, {Component} from 'react';
import {Link} from 'react-router';

export default class BooksList extends Component {
    render() {
        return(
            <ul>
                <li><Link to="/authors/booklistertyrthh/book">book 1</Link></li>
                <li><Link to="/authors/booklistertyrthh/book">book 2</Link></li>
                <li><Link to="/authors/booklistertyrthh/book">book 3</Link></li>
                <li><Link to="/authors/booklistertyrthh/book">book 4</Link></li>
                <li><Link to="/authors/booklistertyrthh/book">book 5</Link></li>
                <li><Link to="/authors/booklistertyrthh/book">book 6</Link></li>
            </ul>
        )
    };
};