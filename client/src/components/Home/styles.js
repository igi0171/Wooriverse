import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  gridContainer: {
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  paper: {
    padding: theme.spacing(2),
  },
  notification: {
    fontWeight: "bold",
    paddingBottom: "10px",
  },
  cancel: {
    color: "black",
    backgroundColor: "white",
    marginRight: "100px",
    fontWeight: "bold",
  },
  login: {
    color: "#0ed5bc",
    backgroundColor: "white",
    marginLeft: "100px",
    fontWeight: "bold",
  },
  box: {
    marginTop: "10px",
  },
}));
