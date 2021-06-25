import { makeStyles, AppBar, Toolbar, IconButton } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
const Hi = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'>
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Hi
