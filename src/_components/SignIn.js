import React from 'react';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Avatar, Button, TextField, Typography, Container, IconButton, Card, CardContent} from '@material-ui/core';
import { connect } from 'react-redux';
import {login} from '../actions/loginAction';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { withRouter } from "react-router";

const useStyles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  customMargin: {
    marginTop: theme.spacing(8),
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#00A1BC",
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#00A1BC",
    '&:hover' : {
      backgroundColor: "#00A1BC",
    }
  },
  message: {
    height: "20px",
    color: "red",
    textAlign: "center"
  },
});

class SignIn extends React.Component {

  state = {
    email           : '',
    password        : '',
    showPassword    : false,
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.setState({
      email: '',
      password: '',
    });
  }

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword})
  }

  render(){
    const {classes} = this.props;
    let {isLoginPending, loginError} = this.props;

    return (
      <Container component="main" maxWidth="xs">
        <Card className={classes.customMargin}>
        <CardContent>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} onSubmit={this.onSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                value={this.state.email}
                onChange={e => this.setState({email: e.target.value})}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.password}
                onChange={e => this.setState({password: e.target.value})}
                InputProps={{
                  endAdornment: 
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={this.handleClickShowPassword}
                      >
                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isLoginPending}
                className={classes.submit}
              >
                Sign In
              </Button>
              <div className={classes.message}>
                { isLoginPending && <div>Please wait...</div> }
                { loginError && <div>{loginError.message}</div> }
              </div>
            </form>
          </div>
        </CardContent>
        </Card>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
}

export default withStyles(useStyles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn)));