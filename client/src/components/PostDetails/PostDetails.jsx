import React, { useEffect } from "react";
import {
  Paper,
  Typography,
  CircularProgress,
  Divider,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useParams, Link } from "react-router-dom";

import CommentSection from "./CommentSection";
import { getPost } from "../../actions/posts";
import useStyles from "./styles";

const PostDetails = () => {
  const { post, isLoading } = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPost(id));
    // eslint-disable-next-line
  }, [id]);

  if (!post) return null;

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  return (
    <Paper style={{ padding: "20px", borderRadius: "15px" }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography gutterBottom variant="body1" component="p">
            {post.caption}
          </Typography>
          <Typography variant="h6">
            <Link
              to={`/artists/${post.member}`}
              style={{ textDecoration: "none", color: "#0ed5bc" }}
            >
              {` ${post.member}`}
              <span role="img" aria-label="Star">
                🌟
              </span>
            </Link>
          </Typography>
          <Typography variant="body1">
            {moment(post.createdAt).format("MM. DD. HH:mm")}
          </Typography>
          <Divider style={{ margin: "20px 0" }} />
          <CommentSection post={post} />
          <Divider style={{ margin: "20px 0" }} />
        </div>
        <div className={classes.imageSection}>
          <img
            className={classes.media}
            src={post.selectedFile}
            alt={post.caption}
          />
        </div>
      </div>
    </Paper>
  );
};

export default PostDetails;
