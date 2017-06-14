import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import MainLayout from './components/main_layout';
import SearchLayout from './components/search_layout';
import Home from './components/home';
import BooksList from './components/books_list';
import BookProfile from './components/book_profile';
import AuthorsList from './components/authors_list';
import GenresList from './components/genres_list';

export default (
    <Router history={browserHistory}>
        <Route component={MainLayout}>
            <Route path="/" component={Home} />
            <Route path="/books">
                <Route  component={SearchLayout}>
                    <IndexRoute component={AuthorsList} />
                </Route>
                <Route path="/books/author/booklistId" component={BooksList} />
                <Route path="/books/author/booklistId/bookId" component={BookProfile} />


            </Route>
            <Route path="/genres">
                <Route component={SearchLayout}>
                    <IndexRoute component={GenresList} />
                </Route>
            </Route>
        </Route>
    </Router>
);