import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core/";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={post.selectedFile} />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.member}🌟</Typography>
        <Typography variant="body2">
          {moment(post.createdAt).format("MM. DD. HH:mm")}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" component="p">
          {post.caption}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {post.likeCount}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
