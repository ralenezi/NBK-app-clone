import React from "react";
import { Menu } from "@material-ui/icons";
import { AppBar, IconButton, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  nav: {
    backgroundColor: theme.palette.primary,
  },
}));
const Navbar = ({ title }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <Menu />
          </IconButton>
          {title ?? " "}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
