import { makeStyles } from "@material-ui/core/styles";
import left from "../images/left.png";
import right from "../images/right.png";
import move from "../images/move.png";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginLeft: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  placeRobotContainer: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  commandButtonContainer: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}));
