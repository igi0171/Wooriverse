import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Artist from "./Artist/Artist";
import useStyles from "./styles";

const Artists = ({ setCurrentId }) => {
  const { artists, isLoading } = useSelector((state) => state.artists);
  const classes = useStyles();

  //   if (!artists.length && !isLoading) return "No artists";

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {artists.map((artist) => (
        <Grid key={artist._id} item xs={12} sm={12} md={6} lg={3}>
          <Artist artist={artist} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Artists;
