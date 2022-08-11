import React, { useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  Paper,
  Typography,
  Button,
  Box,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";

import useStyles from "./styles";

const Home = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { artist } = useParams();
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getPosts(artist));
  }, [dispatch, artist]);

  if (!user?.result?.name) {
    return (
      <Grow in>
        <Container maxWidth="xl">
          <Paper className={classes.paper} elevation={6}>
            <Typography
              variant="h5"
              align="center"
              className={classes.notification}
            >
              Notification
            </Typography>
            <Typography variant="h6" align="center">
              You need to log in.
            </Typography>
            <Typography variant="h6" align="center">
              Log in now?
            </Typography>
            <Box textAlign="center" className={classes.box}>
              <Button
                component={Link}
                to="/"
                variant="contained"
                className={classes.cancel}
              >
                Cancel
              </Button>
              <Button
                component={Link}
                to="/auth"
                variant="contained"
                className={classes.login}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Container>
      </Grow>
    );
  }

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
