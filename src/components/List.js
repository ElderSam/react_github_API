import './List.css';
import React, { Component } from 'react';

import MaterialTable from "material-table";
import tableIcons from './utils/material-table/MaterialTableIcons';
import TranslateTable from './utils/material-table/TranslateTable';

export default class List extends Component {
    state = {
        columns: []
    }
    componentDidMount() {
        this.getPage()
    }

    getPage() {
        
        const columns = [
          { title: 'Nome', field: 'name' },
          { title: 'Descrição', field: 'description' },
          {
            title: 'Link',
            field: 'html_url',
            render: rowData =>
              <a href={rowData.html_url}
              target='_blank' rel='noreferrer'
              className='repo-link'>
                Link
              </a>
          },
          
        ]
    
        this.setState({ columns });
    }

    render() {
        const repositories = this.props.repos;

        const { columns } = this.state;
        //console.log(repositories);

        return(
          <>
            {this.renderLoading()}

              <MaterialTable
              columns={columns}
              data={repositories}
              title="Tabela de Repositórios"
              icons={tableIcons}
              localization={TranslateTable}
            />
          </>

        );
    }
}