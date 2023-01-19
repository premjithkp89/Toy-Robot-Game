import { makeStyles } from "@material-ui/core/styles";
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
