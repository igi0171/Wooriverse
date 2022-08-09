import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "112.5%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    backgroundBlendMode: "darken",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  cardAction: {
    display: "block",
    textAlign: "initial",
  },
});
