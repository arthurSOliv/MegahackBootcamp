import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import EditIcon from '@material-ui/icons/Edit';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HistoryIcon from '@material-ui/icons/History';

import Pedidos from './Pedidos';
import Config from './Config';
import Loja from './Loja';
import Historico from './Historico';
import './user.css';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Header() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [showPedidos, setPedidos] = React.useState(true);
  const [showLoja, setLoja] = React.useState(false);
  const [showConfig, setConfig] = React.useState(false);
  const [showHistorico, setHistorico] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const setScreen = (compName, e) => {
    if(compName === 'config'){
      setPedidos(false);
      setLoja(false);
      setConfig(true);
      setHistorico(false);
    } else if(compName === 'pedidos'){
      setPedidos(true);
      setLoja(false);
      setHistorico(false);
      setConfig(false);
    } else if(compName === 'historico'){
      setPedidos(false);
      setLoja(false);
      setHistorico(true);
      setConfig(false);
    } else{
      setPedidos(false);
      setLoja(true);
      setConfig(false);
      setHistorico(false);
    }
  }

  return (
    <div className={classes.root}>
      <CssBaseline />ute("mycustomattribute")
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        style={{backgroundColor: '#ffcfad'}}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
            style={{color: '#806857'}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap style={{color: '#333333'}}>
            Nome do Cliente
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
            <ListItem button key='Pedidos'  onClick={setScreen.bind(this, 'pedidos')}>
                <ListItemIcon ><LocalGroceryStoreIcon className="menuIcon"/><Typography variant="h6" component="h2">Pedidos</Typography></ListItemIcon>
                <ListItemText />
            </ListItem>
            <ListItem button key='historico'  onClick={setScreen.bind(this, 'historico')}>
                <ListItemIcon ><HistoryIcon className="menuIcon"/><Typography variant="h6" component="h2">Histórico</Typography></ListItemIcon>
                <ListItemText />
            </ListItem>
            <ListItem button key='Promoções'  onClick={setScreen.bind(this, 'loja')}>
                <ListItemIcon><StarIcon className="menuIcon"/><Typography variant="h6" component="h2">Estabelecimentos</Typography></ListItemIcon>
                <ListItemText />
            </ListItem>
            <ListItem button key='Configurações' onClick={setScreen.bind(this, 'config')}>
                <ListItemIcon><EditIcon className="menuIcon"/><Typography variant="h6" component="h2">Configurações</Typography></ListItemIcon>
                <ListItemText />
            </ListItem>
        </List>
        <Divider />
        <List>
            <ListItem button key='Sair'>
                <ListItemIcon><ExitToAppIcon className="menuIcon"/><Typography variant="h6" component="h2">Sair</Typography></ListItemIcon>
                <ListItemText  />
            </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Pedidos showPedidos={showPedidos} />
        <Loja showLoja={showLoja} />
        <Config showConfig={showConfig} />
        <Historico showHistorico={showHistorico} />
      </main>
    </div>
  );
}