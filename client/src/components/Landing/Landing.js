import React, { useEffect } from "react";
import { Container, Grow, Grid, Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";

import { getArtists } from "../../actions/artists";
import Artists from "../Artists/Artists";

import useStyles from "./styles";

const Landing = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    dispatch(getArtists());
  }, [dispatch]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Typography variant="h5" className={classes.looking}>
          Looking for new artists?
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Artists />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Landing;
