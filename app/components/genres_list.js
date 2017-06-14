import React, {Component} from 'react';
import {Link} from 'react-router'

export default class Genres extends Component{
    render() {
        return(
            <ul>
                <li><Link to="/genres/genres_item">Genres 1</Link></li>
                <li><Link to="/genres/genres_item">Genres 2</Link></li>
                <li><Link to="/genres/genres_item">Genres 3</Link></li>
                <li><Link to="/genres/genres_item">Genres 4</Link></li>
                <li><Link to="/genres/genres_item">Genres 5</Link></li>
                <li><Link to="/genresfghdfjhs/genres_item">Кроме этого пункта все ссылки рабочие. Попробуй меня и увидишь ошибку. Важно! Если в Router ссылка будет указана без знака :, то в линке должно быть тождественное равенство текста в соответствующем уровне</Link></li>
            </ul>
        )
    };
};
