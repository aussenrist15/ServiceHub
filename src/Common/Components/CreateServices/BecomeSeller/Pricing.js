import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  table: {
    minWidth: 350,
  },
});

function createData(name, Basic, Standard, Premium) {
  return { name, Basic, Standard, Premium };
}

const rows = [
  createData(
    "Package",
    <TextField
      id="standard-textarea"
      label=""
      placeholder="Name your package (Give your package a catchy title which describes what it includes. For examples 3D or 2D exchange)"
      multiline
    />,
    <TextField
      id="standard-textarea"
      label=""
      placeholder="Name your package (Give your package a catchy title which describes what it includes. For examples 3D or 2D exchange)"
      multiline
    />,
    <TextField
      id="standard-textarea"
      label=""
      placeholder="Name your package (Give your package a catchy title which describes what it includes. For examples 3D or 2D exchange)"
      multiline
    />
  ),
  createData("Offerings", 237, 9.0, 37),
  createData("Eclair", 262, 16.0, 24),
  createData("Cupcake", 305, 3.7, 67),
  createData("Gingerbread", 356, 16.0, 49),
];

export const Pricing = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> </TableCell>
            <TableCell align="center" colSpan={3}>
              Basic
            </TableCell>
            <TableCell align="center" colSpan={3}>
              Standard
            </TableCell>
            <TableCell align="center" colSpan={3}>
              Premium
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center" colSpan={3}>
                {row.Basic}
              </TableCell>
              <TableCell align="center" colSpan={3}>
                {row.Standard}
              </TableCell>
              <TableCell align="center" colSpan={3}>
                {row.Premium}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
