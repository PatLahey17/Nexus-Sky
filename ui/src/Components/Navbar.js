import App from '../App.js'
import React from 'react'
import { ButtonGroup, Button, Grid, useSyles, Paper } from '@material-ui/core'
import { Home, CloudUpload, Pageview, Edit } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import {purple} from '@material-ui/core/colors'
import { spacing, sizing } from '@material-ui/system'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


// })
    // return (
    //     <Paper className = {gridStyles.root}>
    //         <Grid container direction = "column" > 
    //        <Grid container ml = {3} s={12} direction="row"  className = {navStyles.root}>
    //             <Button href='/'  className = {navStyles.root}> <h2>Nexus Sky 349th &nbsp;</h2></Button>
    //         </Grid>
    //         <Grid container s={12} spacing = {3} direction="row" justifyContent="center" alignItems="center" className = {navStyles.root}> 
    //             <ButtonGroup className = {gridStyles.paper} >
    //                 <Button href='/Upload' variant='contained' className = {navStyles.root} >Upload &nbsp;  <CloudUpload/></Button>
    //                 <Button href='/Viewsheets' variant='contained' className = {navStyles.root} >Viewsheets &nbsp; <Pageview/></Button>
    //                 <Button href='/Editsheets' variant='contained' className = {navStyles.root} >Editsheets &nbsp; <Edit/></Button>
    //             </ButtonGroup>
    //         </Grid>
    //         </Grid>
    //         <img className ="navIcon" mb={2} height= "10%" width= "10%" src="https://media.defense.gov/2015/Dec/16/2001326647/1088/820/0/151216-F-XX349-001.JPG" alt = "wing emblem"/>
    //     </Paper>
    // )


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    title: {
      flexGrow: 1,
    },
    button: {
        color: 'white',
        background: 'rgb(0, 48, 143)'
    },
    appBar: {
        background: 'rgb(0, 48, 143)'
    }
  }));
  
  export default function ButtonAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton> */}
            <Grid xs={3} container direction= "row">
                <Typography variant="h4" fontWeight="fontWeightBold" className={classes.title}>
                Nexus Sky
                </Typography>
            </Grid>
            <Grid xs = {6} container direction= "row" justifyContent ="center" alignItems="center">
                <ButtonGroup disableElevation={true}>
                    <Button href='/Upload' variant='contained' className={classes.button}> Upload &nbsp;  <CloudUpload/></Button>
                    <Button href='/Viewsheets' variant='contained' className={classes.button}> Viewsheets &nbsp; <Pageview/></Button>
                    <Button href='/Editsheets' variant='contained' className={classes.button}> Editsheets &nbsp; <Edit/></Button>
                </ButtonGroup>
            </Grid>
            <Grid xs={3}>
                {/*space for image  */}
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }


