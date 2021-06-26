import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 12,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: theme.palette.primary,
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    width: "90%",
    margin: "10px",
  },
});

export default function CustomizedProgressBars({ value, styleObj }) {
  const classes = useStyles();

  return (
    <div className={classes.root} style={styleObj}>
      <BorderLinearProgress variant="determinate" value={value} />
    </div>
  );
}
