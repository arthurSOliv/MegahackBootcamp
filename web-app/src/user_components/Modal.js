import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Edit() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h4 id="simple-modal-title">Editar item em promoção</h4>
      <p id="simple-modal-description">
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
                Salvar
            </Button>
            </center>
        </form>
      </p>
    </div>
  );

  return (
    <div>
        <Fab color="primary" aria-label="edit" onClick={handleOpen}>
            <EditIcon />
        </Fab>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    </div>
  );
}