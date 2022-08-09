import React from "react";
import { Card, CardMedia, ButtonBase } from "@material-ui/core/";
import { useHistory } from "react-router-dom";

import useStyles from "./styles";

const Artist = ({ artist }) => {
  const classes = useStyles();
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
