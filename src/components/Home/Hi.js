import { makeStyles } from '@material-ui/core'
import React from 'react'

//   console.log('🚀 ~ file: Hi.js ~ line 6 ~ theme', theme)
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
}))
const Hi = () => {
  const classes = useStyles()
  return (
    <div>
      <h1 className={classes.root}>hiii!!</h1>
    </div>
  )
}

export default Hi
