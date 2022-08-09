import React, { useEffect } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";

import useStyles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { artist } = useParams();

  useEffect(() => {
    dispatch(getPosts(artist));
  }, [dispatch, artist]);

  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid
          container
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
          className={classes.gridContainer}
        >
          <Grid item xs={12} sm={12} md={12}>
            <Posts />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
