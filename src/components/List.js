import './List.css';
import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

export default function List({ repos, loading }) {
  const columns = [
    { field: 'name', headerName: 'Nome', flex: 1 },
    { field: 'description', headerName: 'Descrição', flex: 2 },
    { field: 'language', headerName: 'Linguagem', flex: 1 },
    {
      field: 'html_url',
      headerName: 'Link',
      flex: 1,
      renderCell: (params) => (
        <a
          href={params.value}
          target="_blank"
          rel="noreferrer"
          className="repo-link"
        >
          Link
        </a>
      ),
    },
  ];

  const rows = repos.map((repo, idx) => ({
    id: repo.id || idx,
    ...repo,
  }));

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {loading && <h3 id="loading">Carregando ...</h3>}
      <div style={{ height: 600, width: '100%' }}>
        <DataGrid
          sx={{
            '& .MuiDataGrid-footerContainer': {
              backgroundColor: '#181818',
              color: '#fff',
            },
            '& .MuiTablePagination-toolbar': {
              backgroundColor: '#181818',
              color: '#fff',
            },
            '& .MuiTablePagination-actions button': {
              color: '#fff',
            },
          }}
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          disableSelectionOnClick
          loading={loading}
          localeText={{
            noRowsLabel: 'Nenhum registro para exibir',
            toolbarDensity: 'Densidade',
            toolbarDensityLabel: 'Densidade',
            toolbarDensityCompact: 'Compacto',
            toolbarDensityStandard: 'Padrão',
            toolbarDensityComfortable: 'Confortável',
          }}
        />
      </div>
    </ThemeProvider>
  );
}