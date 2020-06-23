import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
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

export default function Config(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChangePassword = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
        <Container maxWidth="sm" style={{display: props.showConfig ? 'block' : 'none' }}>
            <div className={classes.root}><center><Typography variant="h4" component="h2">{"Configurações"}</Typography></center></div>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    label="Nome Completo"
                    style={{ margin: 8 }}
                    placeholder="Nome Completo"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="CPF"
                    type="number"
                    placeholder="111.111.111-22"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Telefone"
                    type="number"
                    placeholder="(34) 3333-3333"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="CEP"
                    type="number"
                    placeholder="33.333-333"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Endereço"
                    style={{ margin: 8 }}
                    placeholder="Rua Tal Tal Tal, Bairro Bairro"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Número"
                    type="number"
                    placeholder="333"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="E-mail"
                    type="email"
                    style={{ margin: 8 }}
                    placeholder="email@email.com"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        type={values.showPassword ? 'text' : 'password'}
                        value={values.password}
                        onChange={handleChangePassword('password')}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                        }
                        labelWidth={70}
                    />
                </FormControl>
                <center>
                  <Button variant="contained" color="primary">
                  Salvar dados
                  </Button>
                </center>
            </form>
        </Container>
  );
}