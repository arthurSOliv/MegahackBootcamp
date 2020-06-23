import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
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

export default function Order(props) {
  const classes = useStyles();

  const [itens, setItens] = React.useState([0]);

  const addItem = () => {
    var cont = itens.length+1;
    var vec = [];
    for(var i=0; i<cont;i++){
        vec.push(i);
    }
    setItens(vec);
  }

  const deliveries = [
    {
      value: 's',
      label: 'Sim',
    },
    {
      value: 'n',
      label: 'Não',
    },
  ];

  const [delivery, setDelivery] = ['s'];

  const handleChangeDelivery = (event) => {
    setDelivery(event.target.value);
  };

  return (
    <div style={{display: props.store ? 'block' : 'none' }}>
        <Card className={classes.root}>
        <CardContent>
            <Typography variant="h5" component="h2">
                Nome do Estabelecimento
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
                Categoria
            </Typography>
            <Typography variant="body2" component="p">
                Endereço
            </Typography>
            <Typography variant="body2" component="p">
                Este estabelecimento faz entrega.
            </Typography>
        </CardContent>
        </Card>
        <div className={classes.root}><center><Typography variant="h4" component="h2">{"FAZER PEDIDO"}</Typography></center></div>
        <form className={classes.root} noValidate autoComplete="off">
            {itens.map((row) => {
                return (
                    <div>
                        <FormControl>
                            <InputLabel htmlFor="component-simple">Nome do produto</InputLabel>
                            <Input id="component-simple"  />
                        </FormControl>
                        <FormControl>
                            <InputLabel htmlFor="component-helper">Quantidade</InputLabel>
                            <Input
                            id="component-helper"
                            type="number"
                            aria-describedby="component-helper-text"
                            />
                        </FormControl>
                    </div>
                )
            })}
            <center>
            <Fab color="primary" aria-label="add" style={{display: 'block !important', marginBottom: '20px'}} onClick={addItem}>
                <AddIcon />
            </Fab>
            <br />
            <TextField
                    select
                    label="Entrega?"
                    value={delivery}
                    onChange={handleChangeDelivery}
                    helperText=""
                    >
                    {deliveries.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            <br />
            <Button variant="contained" color="primary" style={{display: 'block !important'}}>
                Pedir
            </Button>
            </center>
        </form>
        <div className={classes.root}><center><Typography variant="h4" component="h2">{"Promoções"}</Typography></center></div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Produto</TableCell>
              <TableCell align="center">Preço (R$)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{backgroundColor: '#fff'}}>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row" align="center">
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}