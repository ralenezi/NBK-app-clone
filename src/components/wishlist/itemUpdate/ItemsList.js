import { useQuery } from "@apollo/client";
import { Box, Grid, makeStyles } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { ITEM_LIST_QUERY } from "../../../graphql/queries";
import Navbar from "../../common/Navbar";
import CustomizedProgressBars from "../../Manjam/Progress";
import ItemCard from "../ItemCard";
const useStylesAgain = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    height: "220px",
    border: "1px solid black",
    marginBottom: "22px",
    borderRadius: "12px",
  },
  heading: {
    paddingTop: "15px",
  },
  progressContent: {
    display: "inline",
    // marginRight
  },
  progressContent2: {
    display: "inline",
    color: theme.palette.primary,
  },
  button: {
    textTransform: "none",
    display: "block",
    color: theme.palette.background.paper,
    backgroundColor: theme.palette.primary.main,
  },
}));
const ItemsList = ({ balance = 0, total = 0 }) => {
  const classes = useStyles();
  const classesAgain = useStylesAgain();
  const { manjamID } = useParams();
  const history = useHistory();
  const { loading, error, data } = useQuery(ITEM_LIST_QUERY, {
    variables: { wishlistId: manjamID },
  });
  const itemsCardsObj = data?.items.map((item) => {
    return <ItemCard {...item} />;
  });
  return (
    <>
      <Fab
        color="primary"
        className={classesAgain.fab}
        aria-label="add"
        onClick={() => {
          history.push(`/add-item/${manjamID}`);
        }}>
        <AddIcon />
      </Fab>
      <Navbar title={`${data?.items[0].wishlist.user.fullName}'s Manjam`} />

      <Box style={{ backgroundColor: "#EAEAEA" }} px={2}>
        <h4>
          {data?.items[0].wishlist.balance || 0} KD out of{" "}
          {data?.items[0].wishlist.total || 0} KD
        </h4>
        <CustomizedProgressBars
          styleObj={{ border: "2px solid black", borderRadius: 5 }}
          value={15}
        />
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          style={{ backgroundColor: "#EAEAEA", height: "100vh" }}>
          {itemsCardsObj}
        </Grid>
      </Box>
    </>
  );
};

export default ItemsList;
