import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  ButtonBase,
} from "@material-ui/core/";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

const Artist = ({ artist }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  const goToArtist = () => {
    history.push(`/${artist.group}/feed`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase className={classes.cardAction} onClick={goToArtist}>
        <CardMedia className={classes.media} image={artist.banner} />
      </ButtonBase>
    </Card>
  );
};

export default Artist;
