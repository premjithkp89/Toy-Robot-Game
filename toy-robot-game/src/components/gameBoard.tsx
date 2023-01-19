
import{Box,Paper,Table,TableBody,TableCell,TableContainer,TableRow} from "@material-ui/core/";
import {getKeyFromIndex} from '../helpers/uniqueId';
import cell from '../images/cell.png';
import brick from '../images/brick.png';
import { RobotImg } from '../pages/robot/RobotImg';
import { useSelector } from "react-redux";
import { RootState } from '../redux/store';
import { useStyles } from "../styles/gameBoard.styles";
import {ROW_COUNT,COL_COUNT} from '../constants'



const generateTable = (wallMap:any) => {
    let gameTable = [];
    const MAX_COLS = COL_COUNT +1
    for (let i = 1; i < MAX_COLS; i++) {
      let children = [];
      for (let j = ROW_COUNT; j > 0; j--) {
          const bgImage = wallMap[`${MAX_COLS-i}-${MAX_COLS-j}`]===true ? `url(${brick})`: `url(${cell})`
        children.push(

          <td style={{padding: '0px'}}>
            <Box
              style={{
                backgroundImage: bgImage, backgroundSize:'contain',
                width: 80,
                padding: "1px 1px",
                height: 80,
              }}
              id={getKeyFromIndex(i, j)}
              key={getKeyFromIndex(i, j)}
            ></Box>
          </td>
        );
      }
      gameTable.push(
        <TableRow  key={i} >
          <TableCell style={{padding: '0px'}}>{children}</TableCell>
        </TableRow>
      );
    }
    return gameTable;
  };


  const GameBoard =()=>{
    const classes = useStyles();
    const Xcordinate = useSelector(
        (state: RootState) => state.placeRobot.xCordinate
      );

      const Ycordinate = useSelector(
        (state: RootState) => state.placeRobot.yCordinate
      );

      const angle = useSelector(
        (state: RootState) => state.placeRobot.angle
      );

      const showRobot = useSelector(
        (state: RootState) => state.placeRobot.showrobot
      );

      const wallMap = useSelector(
        (state: RootState) => state.placeRobot.wallMap
      );

    return (
        <Box>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>{generateTable(wallMap)}</TableBody>
            </Table>
            {showRobot && RobotImg(Xcordinate, Ycordinate,angle)}
          </TableContainer>

        </Box>
      );
    };
  export default GameBoard