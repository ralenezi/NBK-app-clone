import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
  },
});

export default function BottomNav({ wishlists }) {
  const classes = useStyles();
  const [value, setValue] = React.useState("Home");

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}>
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Home"
        value="Home"
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        component={Link}
        to="/manjam"
        label="Manjam"
        value="Manjam"
        icon={<AttachMoneyIcon />}
      />

      <BottomNavigationAction
        component={Link}
        to="/"
        label="Favorites"
        value="Favorites"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Nearby"
        value="Nearby"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
