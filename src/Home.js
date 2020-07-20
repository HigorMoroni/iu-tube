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
  ListSubheader,
  Divider,
  Box,
  Typography,
  Grid,
  Hidden,
  Switch
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
  History,
  PlayCircleFilled,
  AddCircle
} from '@material-ui/icons';
import { useTheme } from '@material-ui/core/styles';

import whiteLogo from './assets/images/white-logo.png';
import blackLogo from './assets/images/black-logo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: theme.palette.background.dark,
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
  },
  subheader: {
    textTransform: 'uppercase'
  }
}));

const videos = [
  {
    id: 1,
    title: 'Colocamos um EX-TRAFICANTE e uma MÃE d...',
    channel: 'Spotniks',
    icon: 'check',
    views: '2,9 mi de visualizações',
    date: 'há 10 meses',
    avatar: 'AATXAJx51-lysWmiUD97IuB2sgttqLRb-TCDx9MOulxfgg',
    thumb: 'U7nhRRyKYG4'
  },
  {
    id: 2,
    title: 'Eu, a Patroa e as Crianças - 4x15 | Guerra de doces - HD',
    channel: 'Eu, a Patroa e as Crianç...',
    icon: 'check',
    views: '532 mil visualizações',
    date: 'há 2 semanas',
    avatar: 'AATXAJzblZSfMo4NQcSQF-wIdByicMeBT3eCpyFDArDuFg',
    thumb: 'TuIfJ5ZMh9M'
  },
  {
    id: 3,
    title: 'Gabriela Rocha | Ninguém Explica Deus | Live Juntos...',
    channel: 'Gabriela Rocha',
    icon: 'music',
    views: '755 mil visualizações',
    date: 'há 4 semanas',
    avatar: 'AATXAJzhRN7WkZeJhWgKQep2JsaN2DfLBrTutdW60_STVw',
    thumb: 'SUys6tVfnNU'
  },
  {
    id: 4,
    title: 'O LEON JOGOU NA FASE MAIS DIFÍCIL?',
    channel: 'Controle Dois',
    icon: 'check',
    views: '365 mil visualizações',
    date: 'há 6 dias',
    avatar: 'AATXAJyAmG83tYM__gii2LvLjUE613e9RVaeyVKSBUEsDg',
    thumb: 'TbNGbqF7PRU'
  },
  {
    id: 5,
    title: '10 lugares incríveis que parecem ter saído de um...',
    channel: 'Mistérios do Mundo',
    icon: 'none',
    views: '1,1 mi de visualizações',
    date: 'há 7 meses',
    avatar: 'AATXAJxJFgA-wU-7SCKa2xHOAHGMNgBZDFDLavpbwcA74g',
    thumb: '2vdAlfumI8A'
  },
  {
    id: 6,
    title: 'EU ODEIO O SAIKO! - SUPER MARIO MAKER 2',
    channel: 'alanzoka',
    icon: 'check',
    views: '1,9 mi de visualizações',
    date: 'há 10 meses',
    avatar: 'AATXAJyZ3SCM7thuRwsSwrprd6e56F64MEKAfwRQEXUw5w',
    thumb: 'VYUkXGhcHHs'
  },
  {
    id: 7,
    title: 'Fazer 250 - do RJ ao CHILE, Viagem Solo de Moto...',
    channel: 'Victor Pereira',
    icon: 'none',
    views: '1,2 mi de visualizações',
    date: 'há 3 anos',
    avatar: 'AATXAJwXf0HsJqo0CaEy81hscDn4OTqOav9bd3uwzSzOqg',
    thumb: '7JkARioYZRg'
  },
  {
    id: 8,
    title: 'THIAGO VENTURA - TIPOS DE CUMPRIMENTO',
    channel: 'Thiago Ventura',
    icon: 'none',
    views: '3,4 mi de visualizações',
    date: 'há 2 meses',
    avatar: 'AATXAJwMVJGAigqIXBMdqc6getdBE8phWio1mZzQCRTjaQ',
    thumb: 'n_GIN8d4jd8'
  },

]

export default function Home({ darkMode, setDarkMode }) {
  const classes = useStyles();
  const theme = useTheme();
  return(
    <div className={classes.root}>
      <AppBar className={classes.appBar} color='inherit'>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuIcon}
            aria-label="menu"
          >
            <Menu />
          </IconButton>
          <img
            src={
              theme.palette.type === 'dark' ? 
              whiteLogo : blackLogo
            }
            alt="logo"
            className={classes.logo}
          />
          <sup style={
            theme.palette.type === 'dark' ?
            {color: "white"} : {color: "black"}
          }>BR</sup>
          <div className={classes.grow} />
          <Switch
            value={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className={classes.icons}
          />
          <IconButton className={classes.icons}><VideoCall /></IconButton>
          <IconButton className={classes.icons}><Apps /></IconButton>
          <IconButton className={classes.icons}><MoreVert /></IconButton>
          <Button
            variant="outlined"
            color="secondary"
            startIcon={<AccountCircle />}
          >
            Fazer Login
          </Button>
        </Toolbar>
      </AppBar>
      <Box display="flex">
        <Hidden mdDown>
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
              <Box p={7}>
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
              <List
                component='nav'
                aria-labelledby='div'
                subheader={
                  <ListSubheader
                    component='div'
                    id='nested-list-subheader'
                    className={classes.subheader}
                  >
                    O Melhor do IU-Tube
                  </ListSubheader>
                }
              >
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilled />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText
                    }}
                    primary={'Música'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilled />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText
                    }}
                    primary={'Esportes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilled />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText
                    }}
                    primary={'Jogos'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilled />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText
                    }}
                    primary={'Filmes'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilled />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText
                    }}
                    primary={'Notícias'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilled />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText
                    }}
                    primary={'Ao vivo'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilled />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText
                    }}
                    primary={'Destaques'}
                  />
                </ListItem>
                <ListItem button classes={{ root: classes.listItem }}>
                  <ListItemIcon>{<PlayCircleFilled />}</ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.listItemText
                    }}
                    primary={'Videos 360°'}
                  />
                </ListItem>
              </List>
              <Divider />
                <List>
                  <ListItem button classes={{ root: classes.listItem }}>
                    <ListItemIcon>{<AddCircle />}</ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.listItemText
                      }}
                      primary={'Procurar canais'}
                    />
                  </ListItem>
                </List>
              <Divider />
            </div>
          </Drawer>
        </Hidden>
        <Box p={5}>
          <Toolbar />
          <Typography
            variant='h5'
            color='textPrimary'
            style={{ fontWeight: 500, paddingLeft: 10, paddingBottom: 15, fontSize: 20 }}
          >
            Recomendados
          </Typography>
          <Grid container spacing={4}>
            {
              videos.map((item, index) => (
                <Grid item lg={3} md={4} sm={6} xs={12}>
                  <Box>
                    <img
                      style={{ width: '100%' }}
                      alt={item.title}
                      src={`https://img.youtube.com/vi/${item.thumb}/maxresdefault.jpg`}
                    />
                    <Box>
                      <Typography
                        style={{ fontWeight: 600}}
                        gutterBottom
                        variant='body1'
                        color='textPrimary'
                      >
                        {item.title}
                      </Typography>
                      <Typography display='block' variant='body2'color='textSecondary'>
                        {item.channel}
                      </Typography>
                      <Typography variant='body2'color='textSecondary'>
                        {`${item.views} · ${item.date}`}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              ))
            }
          </Grid>
        </Box>
      </Box>
    </div>
  )
}
