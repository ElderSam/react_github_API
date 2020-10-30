import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {

    render() {
        const repositories = this.props.repos;
        console.log(repositories);

        return(
            <ul id="repository-list">         
                {repositories.map((repo) => ( //para cada item do array de repositórios
                    <ListItem repo={repo} />
                ))}   
          </ul>
    
        );
    }
}