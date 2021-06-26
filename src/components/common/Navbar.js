import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
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
