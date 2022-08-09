import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Artist from "./Artist/Artist";

const Artists = () => {
  const { artists, isLoading } = useSelector((state) => state.artists);

  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid container alignItems="stretch" spacing={3}>
      {artists.map((artist) => (
        <Grid key={artist._id} item xs={12} sm={12} md={6} lg={3}>
          <Artist artist={artist} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Artists;
