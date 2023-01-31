
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import React from 'react'
import { feeder } from '../../../../MockData/MockData';
import http from '../../../../Services/Services';
const columns = [
    { field: 'id', headerName: 'ID' },
    {
      field: 'name',
      headerName: 'Name',
    },
    {
      field: 'email',
      headerName: 'Email',
    },
    {
      field: 'address',
      headerName: 'Address',
    }
  ];
export const Datagrid = () => {
    const [pageState, setPageState] = useState<any>({
        isLoading: false,
        data: [],
        total: 10,
        page: 1,
        pageSize: 3
      })
      useEffect(() => {
        const fetchData = async () => {
          // setPageState(old => ({ ...old, isLoading: true }))
          
          // const response = await fetch(`http://localhost:4000?page=${pageState.page}&limit=${pageState.pageSize}`)
          // const json = await response.json()
          // const response = await http.get(`users`)
          const response=feeder(pageState.pageSize,pageState.page)
          console.log(response)
        // const data=feeder(1,3)
          setPageState((previousData:any) => ({ ...previousData, isLoading: false, data: response.data, total: pageState.total }))
        }
        fetchData()
      }, [pageState.page, pageState.pageSize])    


   
      
  return (
    // <div className={styles.customer}>
    //     <Box sx={{ height: 400, width: '100%' }}>
    //    {/* {console.log(this.rows)} */}
    //   <DataGrid
    //     rows={this.state.data}
    //     columns={this.columns}
    //     pageSize={5}
    //     rowsPerPageOptions={[5]}
    //     checkboxSelection
    //     disableSelectionOnClick
    //     // onCellClick={(id:any)=><KeepMountedModal Component={<Delete/>}heading={"Delete"} sx={{textAlign:"center"}}/>}
    //     // experimentalFeatures={{ newEditingApi: true }}
    //   />
    // </Box>
    //     {/* <CustomizedTables /> */}
    //     </div>

    <Box>
    {/* <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div">
        </Typography>
      </Toolbar>
    </AppBar> */}
    <Container style={{ marginTop: 100, marginBottom: 100 }}>
      <DataGrid
        autoHeight
        rows={pageState.data}
        rowCount={pageState.total}
        loading={pageState.isLoading}
        rowsPerPageOptions={[2, 4, 6, 8, 10]}
        pagination
        page={pageState.page - 1}
        pageSize={pageState.pageSize}
        paginationMode="server"
        onPageChange={(newPage) => {
          setPageState((old:any) => ({ ...old, page: newPage + 1 }))
        }}
        onPageSizeChange={(newPageSize) => setPageState((old:any) => ({ ...old, pageSize: newPageSize }))}
        columns={columns}
      />
    </Container>
  </Box>


  )
}
