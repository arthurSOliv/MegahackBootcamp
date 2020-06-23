import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SendIcon from '@material-ui/icons/Send';
import Fab from '@material-ui/core/Fab';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Order from './Order';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'inline-block',
    width: '100%',
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function Loja(props) {
  const classes = useStyles();

  const [store, setStore] = React.useState(false);
  const [showLojas, setLojas] = React.useState(true);
  const [back, setBack] = React.useState(false);

  const showStore = (compName, e) => {
    setLojas(false);
    setStore(true);
    setBack(true);
  }

  const showStores = () => {
    setLojas(true);
    setStore(false);
    setBack(false);
  }

  return (
    <div style={{display: props.showLoja ? 'block' : 'none' }}>
      <Fab color="primary" aria-label="add" style={{display: back ? 'block' : 'none', marginBottom: '30px !important'}} onClick={showStores.bind(this)}>
        <KeyboardReturnIcon />
      </Fab>
      <div style={{display: showLojas ? 'block' : 'none' }} >
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Alimentícia
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button onClick={showStore.bind(this, 'id')}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Varejão Santana" />
          </ListItem>
          <ListItem button onClick={showStore.bind(this, 'id')}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Mini Mercado Ramos" />
          </ListItem>
        </List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Vestuário
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button onClick={showStore.bind(this, 'id')}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Roupas Modas" />
          </ListItem>
          <ListItem button onClick={showStore.bind(this, 'id')}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Brexó Sant" />
          </ListItem>
        </List>
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Esportiva
            </ListSubheader>
          }
          className={classes.root}
        >
          <ListItem button onClick={showStore.bind(this, 'id')}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Minerva" />
          </ListItem>
          <ListItem button onClick={showStore.bind(this, 'id')}>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Tremendão" />
          </ListItem>
        </List>
      </div>
      <Order store={store}/>
    </div>
  );
}