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
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { likePost } from "../../../actions/posts";
import useStyles from "./styles";

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();
  const [likes, setLikes] = useState(post?.likes);

  const hasLikedPost = post.likes.find((like) => like === user?.result?._id);
  const userId = user?.result?._id;

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length + post.likeCount > post.likeCount) {
      return likes.find((like) => like === userId) ? (
        <>
          <FavoriteIcon fontSize="small" />
          &nbsp;
          {likes.length + post.likeCount}
        </>
      ) : (
        <>
          <FavoriteBorderIcon fontSize="small" />
          &nbsp;{likes.length + post.likeCount}
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

  const openPost = () => {
    history.push(`/${post.artist}/feed/${post._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase className={classes.cardAction} onClick={openPost}>
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
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={handleLike}
        >
          <Likes />
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
