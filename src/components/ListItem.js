import React, { Component } from 'react';

export default class ListItem extends Component {

    render() {
        const repo = this.props.repo;

        return( //retorna dados do repositório
            <li>
                <img src={ repo.avatar_url } alt="avatar url"/>
                <strong>{ repo.name }</strong>
                <p>{ repo.description }</p>
                <a href={ repo.html_url } target="_blank" rel="noopener noreferrer">link</a>
            </li>
        );
    }
}