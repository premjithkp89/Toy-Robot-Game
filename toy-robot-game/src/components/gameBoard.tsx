import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import cell from '../images/cell.png';
import { RobotImg } from "../pages/robot/RobotImg";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


const useStyles = makeStyles({
    table: {
      //minWidth: 650
      borderCollapse: 'separate',
      borderSpacing: '0px 4px',
      borderBottom: '5px solid white',
      rowGap:'1em',
      backgroundColor:'gray'

    },

  });

  interface BoardProps{
    showRobot:boolean;
    x:number;
    y:number;
    angle:number;
  }

const getUniqueKeyFromArrayIndex = (rowNum: any, columnNum: any) => {

    return `${6-rowNum}-${6-columnNum}`;
  };

const generateTable = () => {
    let table = [];
    // Outer loop to create parent
    for (let i = 1; i < 6; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 5; j > 0; j--) {
        children.push(

          <td style={ {backgroundImage:`url(${cell})`, backgroundSize:'contain'}}>
            <div
              style={{

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
        <TableRow key={i} >
          <TableCell >{children}</TableCell>
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

      console.log("ROBOT",Xcordinate,Ycordinate,angle,showRobot)

    return (
        <div>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableBody>{generateTable()}</TableBody>
            </Table>
            {showRobot && RobotImg(Xcordinate, Ycordinate,angle)}
          </TableContainer>

        </div>
      );
    };
  export default GameBoard