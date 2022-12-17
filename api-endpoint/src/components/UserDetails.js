import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { loadUsers,deleteUser } from "../redux/Action";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

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
    color: theme.palette.common.white,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));


function UserDetails() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleDelete=(id)=>{
    if(window.confirm(`Are You Sure Want To Delete The User`)){
      dispatch(deleteUser(id))
    }
  }

  return (
    <div>
      <h2 style={{textAlign:"center",fontSize:"50px",color:"green"}}>User Details</h2>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 700 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>First_name</StyledTableCell>
              <StyledTableCell align="center">Last_name</StyledTableCell>
              <StyledTableCell align="center">Company_name</StyledTableCell>
              <StyledTableCell align="center">City</StyledTableCell>
              <StyledTableCell align="center">state</StyledTableCell>
              <StyledTableCell align="center">Zip</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Web</StyledTableCell>
              <StyledTableCell align="center">Age</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users && users.map((user) => (
                <StyledTableRow key={user.id}>
                  <StyledTableCell component="th" scope="row">
                    {user.first_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.last_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {user.company_name}
                  </StyledTableCell>
                  <StyledTableCell align="center">{user.city}</StyledTableCell>
                  <StyledTableCell align="center">{user.state}</StyledTableCell>
                  <StyledTableCell align="center">{user.zip}</StyledTableCell>
                  <StyledTableCell align="center">{user.email}</StyledTableCell>
                  <StyledTableCell align="center">{user.web}</StyledTableCell>
                  <StyledTableCell align="center">{user.age}</StyledTableCell>
                  <StyledTableCell align="center">
                  <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    ><ButtonGroup variant="contained" aria-label="contained primary button group">
        <Button style={{marginRight:"5px"}} color="secondary" onClick={()=>handleDelete(user.id)} >Delete</Button>
        <Button color="primary">Edit</Button>
      </ButtonGroup></Box></StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default UserDetails;
