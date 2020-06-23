import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from './Modal';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      ...theme.typography.button,
        padding: theme.spacing(1),
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function createData(name, price) {
  return { name, price };
}

const rows = [
  createData('Frozen yoghurt', 15),
  createData('Ice cream sandwich', 20),
  createData('Eclair', 20),
];

export default function Promo(props) {
  const classes = useStyles();

  return (
    <div style={{display: props.showPromo ? 'block' : 'none' }}>
      <div className={classes.root}><center><Typography variant="h4" component="h2">{"Adcionar Promoção"}</Typography></center></div>
      <form className={classes.root} noValidate autoComplete="off">
            <FormControl>
                <InputLabel htmlFor="component-simple">Nome do produto</InputLabel>
                <Input id="component-simple"  />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="component-helper">Valor</InputLabel>
                <Input
                id="component-helper"
                type="number"
                aria-describedby="component-helper-text"
                />
            </FormControl>
            <center>
            <Button variant="contained" color="primary">
                Adicionar
            </Button>
            </center>
        </form>
      <div className={classes.root}><center><Typography variant="h4" component="h2">{"Promoções"}</Typography></center></div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Produto</TableCell>
              <TableCell align="center">Preço</TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{backgroundColor: '#fff'}}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">
                  <Edit />
                </TableCell>
                <TableCell align="center">
                  <Fab color="secondary" aria-label="edit">
                    <DeleteIcon />
                  </Fab></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}