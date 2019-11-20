import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {AppBar, Toolbar, Typography, Paper, Table, TableHead, TableRow, TableCell, IconButton, Tooltip, TableBody} from '@material-ui/core'
import ExitToApp from '@material-ui/icons/ExitToApp';
import { withRouter } from "react-router";
import {getList} from '../actions/userAction';
import { connect } from 'react-redux';

const useStyles = theme => ({
    title:  {
        flexGrow        :  1
    },
    table   : {
        minWidth                : 650,
    },
    paper   : {
        width                   : '100%',
        overflowX               : 'auto',
    },
    customMargin  : {
        margin                  : '2%'
    },
    customAppBar:{
        backgroundColor         : "#00A1BC"
    }
});

class Dashboard extends React.Component{

    handleLogOut = () => {
        this.props.history.push('/');
    }

    componentDidMount(){
        this.props.getList();
    }

    render(){
        const {classes} = this.props;

        return(
            <div>
                <AppBar position="static" className={classes.customAppBar}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        My Dashboard
                    </Typography>
                    <Tooltip title="logout">
                    <IconButton
                        aria-label="Log Out"
                        color="inherit"
                        onClick={this.handleLogOut}
                    >
                        <ExitToApp />
                    </IconButton>
                    </Tooltip>
                </Toolbar>
                </AppBar>
                <div className={classes.customMargin}>
                <Paper className={classes.paper} elevation={6} >
                    <Table aria-label="customized table" className={classes.table}>
                        <TableHead>
                        <TableRow>
                            <TableCell align="left">Id</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Age</TableCell>
                            <TableCell align="left">Gender</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Phone Number</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.props.usersList.map(user => (
                                <TableRow key={user.id}>
                                    <TableCell align="left">{user.id}</TableCell>
                                    <TableCell align="left">{user.name}</TableCell>
                                    <TableCell align="left">{user.age}</TableCell>
                                    <TableCell align="left">{user.gender}</TableCell>
                                    <TableCell align="left">{user.email}</TableCell>
                                    <TableCell align="left">{user.phoneNo}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Paper>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        usersList: state.user.payload
    }
}

const mapDispatchToProps = dispatch => {
    return{
        getList: () => dispatch(getList())
    }
}

export default withStyles(useStyles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard)));