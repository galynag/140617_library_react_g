import React, {Component} from 'react';
import {Link} from 'react-router';

export default class BooksList extends Component {
    render() {
        return(
            <ul>
                <li><Link to="books/author/booklist/book">book 1</Link></li>
                <li><Link to="books/author/booklist/book">book 2</Link></li>
                <li><Link to="books/author/booklist/book">book 3</Link></li>
                <li><Link to="books/author/booklist/book">book 4</Link></li>
                <li><Link to="books/author/booklist/book">book 5</Link></li>
                <li><Link to="books/author/booklist/book">book 6</Link></li>
            </ul>/author
        )
    };
};