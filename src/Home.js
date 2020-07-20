import React from 'react';
import { 
  makeStyles,
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  Typography
} from '@material-ui/core';
import {
  Menu,
  AccountCircle,
  VideoCall,
  MoreVert,
  Apps,
  Home as HomeIcon,
  Subscriptions,
  Whatshot,
  VideoLibrary,
  History
} from '@material-ui/icons';

import whiteLogo from './assets/images/white-logo.png';
import blackLogo from './assets/images/black-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    height: 27
  },
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: 'none'
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(6)
  },
  icons: {
    paddingRight: theme.spacing(5)
  },
  grow: {
    flexGrow: 1
  },
  listItemText: {
    fontSize: 14
  },
  listItem: {
    paddingTop: 4,
    paddingBottom: 4,
  }
}));

export default function Home() {
  const classes = useStyles();
  return(
    <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            color="inherit"
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <img
            src={blackLogo}
            alt="logo"
            className={classes.logo}
          />
          <sup>BR</sup>
          <div className={classes.grow} />
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <VideoCall />
          </IconButton>
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <Apps />
          </IconButton>
          <IconButton
            className={classes.icons}
            color="inherit"
          >
            <MoreVert />
          </IconButton>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<HomeIcon />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Inicio'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<Whatshot />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Em alta'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<Subscriptions />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Inscrições'}
              />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<VideoLibrary />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Biblioteca'}
              />
            </ListItem>
            <ListItem button classes={{ root: classes.listItem }}>
              <ListItemIcon>{<History />}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.listItemText
                }}
                primary={'Histórico'}
              />
            </ListItem>
          </List>
          <Divider />
          <Box p={8}>
            <Typography variant='body2'>
              Faça login para curtir vídeos, comentar e se inscrever.
            </Typography>
            <Box mt={2}>
              <Button
                variant='outlined'
                color='secondary'
                startIcon={<AccountCircle />}
              >
                Fazer Login
              </Button>
            </Box>
          </Box>
          <Divider />
        </div>
      </Drawer>
    </div>
  )
}
