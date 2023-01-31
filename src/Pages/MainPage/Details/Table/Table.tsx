import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import Paper from "@mui/material/Paper";
import { Button, TableFooter } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useContext, useReducer, useState } from "react";
import http from "../../../../Services/Services";
// import { INITIAL_STATE, Reducer, ACTION_TYPES } from "../../Reducer/Reducer";
import { DetailsContext } from "../Details";
import { feeder } from "../../../../MockData/MockData";

export const ACTION_TYPES = {
  setData: "setData",
  // FETCH_SUCCESS: "FETCH_SUCCESS",
  // FETCH_ERROR: "FETCH_ERROR",
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables() {
  let context: any = useContext(DetailsContext);
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState([]);
  const [previousPage, setPreviousPage] = useState();
  const [nextPage, setNextPage] = useState();
  // const [totalRows, setTotalRows] = useState(20);
  const [totalRows, setTotalRows] = useState(20);
  const [rowsPerPage, setRowsPerPage] = useState(0);
  



  React.useEffect(() => {
    async function getData() {
      try {
        // http://localhost:4000/player?page=3&limit=2
        //   console.log(rowsPerPage)
        // console.log(page)
        let data = await http.get(`player?page=${page}&limit=${rowsPerPage}`);
        setTotalRows(data.data.totalCount)
        context.setData(data.data.result[0].users)
        setPreviousPage(data.data.previouspage)
        setNextPage(data.data.nextPage)
        console.log(data.data.result[0].users)
        // const response = feeder(initialState.rowsPerPage, initialState.page);
        // setData(response.data)
        console.log(data.data.result[0].users)
        // dispatch({type:ACTION_TYPES.setData,payload:data.data.result[0].users})
        // let data = await http.get("users");
        // console.log(response.data);
        // context.dispatch({ type: ACTION_TYPES.FETCH_SUCCESS, payload: data });
      } catch (err: any) {
        // dispatch({type:ACTION_TYPES.FETCH_ERROR})
        console.log(err);
      }
    }
    getData();
  }, [page, rowsPerPage]);
  console.log(context.state.posts);
  // console.log(context.state.posts.data.previouspage)
  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(1);
  };
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };
  // console.log(data.previouspage)
  return (
    <TableContainer
      component={Paper}
      sx={{ paddingTop: "0rem", marginTop: "0rem" }}
    >
      <Table
        sx={{ minWidth: 500, paddingTop: "0rem" }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow sx={{ marginTop: "0rem", paddingTop: "0rem" }}>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>country</StyledTableCell>
            <StyledTableCell>type</StyledTableCell>
            <StyledTableCell> totalScore</StyledTableCell>
            <StyledTableCell> dateOfJoining</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody sx={{ fontSize: "1rem" }}>
          {context.data?.map((item: any) => (
            <StyledTableRow key={item.id}>
              {/* <StyledTableCell component="th" scope="row">
                {item.id}
              </StyledTableCell> */}
              <StyledTableCell>{item.name}</StyledTableCell>
              <StyledTableCell>{item.country}</StyledTableCell>
              <StyledTableCell>{item.type}</StyledTableCell>
              <StyledTableCell>{item.totalScore}</StyledTableCell>
              <StyledTableCell>{item.dateOfJoining}</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableRow>
            <TablePagination
              rowsPerPageOptions={[1, 3, 5]}
              count={totalRows}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              backIconButtonProps={{ disabled: !previousPage }}
              nextIconButtonProps={{ disabled: !nextPage }}
            />
          </TableRow>
        <TableFooter>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
