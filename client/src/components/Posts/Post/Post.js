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
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import moment from "moment";
import { useDispatch } from "react-redux";

import { likePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (post.likes.length + post.likeCount > post.likeCount) {
      return post.likes.find((like) => like === user?.result?._id) ? (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {post.likes.length + post.likeCount}
        </>
      ) : (
        <>
          <FavoriteBorderIcon fontSize="small" />
          &nbsp;{post.likes.length + post.likeCount}
        </>
      );
    }
    return (
      <>
        <FavoriteBorderIcon fontSize="small" />
        &nbsp;{post.likeCount}
      </>
    );
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardMedia className={classes.media} image={post.selectedFile} />
      <div className={classes.overlay}>
        <Typography variant="h6">
          {post.member}
          <span role="img" aria-label="Star">
            🌟
          </span>
        </Typography>
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
          disabled={!user?.result}
          onClick={() => {
            dispatch(likePost(post._id));
          }}
        >
          <Likes />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
