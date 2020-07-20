import React from 'react';
import { makeStyles, AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Menu, AccountCircle, VideoCall, MoreVert, Apps} from '@material-ui/icons';

import whiteLogo from './assets/images/white-logo.png';
import blackLogo from './assets/images/black-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'
  },
  appBar: {
    boxShadow: 'none'
  },
  logo: {
    height: 30
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
    </div>
  )
}
