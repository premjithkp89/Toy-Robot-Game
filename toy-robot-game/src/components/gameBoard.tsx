import { makeStyles } from "@material-ui/core/styles";
import{Paper,Table,TableBody,TableCell,TableContainer,TableRow} from "@material-ui/core/";
import {getUniqueKeyFromArrayIndex} from '../helpers/directionMapper';
import cell from '../images/cell.png';
import brick from '../images/brick.png';
import { RobotImg } from "../pages/robot/RobotImg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const useStyles = makeStyles({
    table: {
      borderCollapse: 'collapse',
      borderSpacing: '0px 4px',
      borderBottom: '5px solid white',
      rowGap:'1em',
      backgroundColor:'white'

    },

  });


const generateTable = (wallMap:any) => {
    console.log("")
    let table = [];
    for (let i = 1; i < 6; i++) {
      let children = [];
      for (let j = 5; j > 0; j--) {
          const bgImage = wallMap[`${6-i}-${6-j}`]===true ? `url(${brick})`: `url(${cell})`
        children.push(

          <td style={{padding: '0px'}}>
            <div
              style={{
                backgroundImage: bgImage, backgroundSize:'contain',
                width: 80,
                padding: "1px 1px",
                height: 80,
              }}
              id={getUniqueKeyFromArrayIndex(i, j)}
              key={getUniqueKeyFromArrayIndex(i, j)}
            ></div>
          </td>
        );
      }
      table.push(
        <TableRow  key={i} >
          <TableCell style={{padding: '0px'}}>{children}</TableCell>
        </TableRow>
      );
    }
    return table;
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
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>{generateTable(wallMap)}</TableBody>
            </Table>
            {showRobot && RobotImg(Xcordinate, Ycordinate,angle)}
          </TableContainer>

        </div>
      );
    };
  export default GameBoard