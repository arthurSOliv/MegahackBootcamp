import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

export default function Historico(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{display: props.showHistorico ? 'block' : 'none' }}>
        <div className={classes.root}><center><Typography variant="h4" component="h2">{"Histórico de Pedidos."}</Typography></center></div>
      <ExpansionPanel >
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Nome do Cliente</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Endereço do Cliente</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Negado</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Produto 1" />
            <Chip label="Produto 2" />
            <Chip label="Produto 3" />
          </div>
        </ExpansionPanelDetails>
        <Divider />
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Nome do Cliente</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Endereço do Cliente</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Finalizado</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} />
          <div className={classes.column}>
            <Chip label="Coca-cola" />
            <Chip label="Arroz" />
            <Chip label="Feijão" />
            <Chip label="Sorvete" />
          </div>
        </ExpansionPanelDetails>
        <Divider />
      </ExpansionPanel>
    </div>
  );
}