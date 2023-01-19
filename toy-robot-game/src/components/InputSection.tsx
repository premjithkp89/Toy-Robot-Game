import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography } from "@material-ui/core";
import {
  setRowNumber,
  setColNumber,
  setDirection,
  setAngle,
  setShowRobot,
  setXOffset,
  setYOffset,
  setWallMap,
  setWallRowNumber,
  setWallColNumber,
} from "../redux/reducers/inputReducer";
import { RootState } from "../redux/store";

export const InputSection: FC<{}> = () => {
  const dispatch = useDispatch();

  const rowNumber = useSelector((state: RootState) => state.placeRobot.row);

  const colNumber = useSelector((state: RootState) => state.placeRobot.column);


  const currentDirection = useSelector(
    (state: RootState) => state.placeRobot.direction
  );

  const wallMap = useSelector((state: RootState) => state.placeRobot.wallMap);

  const setRow = (row: number) => {
    if (rowNumber > 0 && rowNumber < 6) {
      dispatch(setRowNumber({ row: row }));
    }
  };

  const setCol = (col: number) => {
    if (colNumber > 0 && colNumber < 6) {
      dispatch(setColNumber({ col: col }));
    }
  };

  const setWallRow = (row: number) => {
    dispatch(setWallRowNumber({ wallRow: row }));
  };

  const setWallCol = (col: number) => {
    dispatch(setWallColNumber({ wallCol: col }));
  };

  const setDirections = (direction: any) => {
    dispatch(setDirection({ direction: direction }));
  };

  const updateAngle = (direction: string) => {
    dispatch(setAngle({ facing: direction }));
  };

  const onClickPlace = () => {
    dispatch(setShowRobot({ showRobot: true }));
    placeRobot(rowNumber, colNumber);
  };

  const placeRobot = (row: number, column: number) => {
    const cell = document.getElementById(`${row}-${column}`);
    const domRect = cell?.getBoundingClientRect();
    domRect && dispatch(setXOffset({ xCordinate: domRect.x }));
    domRect && dispatch(setYOffset({ yCordinate: domRect.y }));
  };

  const placeWall = () => {
    dispatch(setWallMap({}));
  };

  const handleClick = (command: string, row?: number, column?: number) => {
    switch (command) {
      case "RIGHT":
        updateAngle("RIGHT");
        break;
      case "LEFT":
        updateAngle("LEFT");
        break;

      case "PLACE_WALL":
        placeWall();
        break;

      case "MOVE":
        if (currentDirection === "NORTH") {
          if (rowNumber === 5) {
            placeRobot(1, colNumber);
            setRow(1);
          } else {
            !wallMap[`${rowNumber + 1}-${colNumber}`] &&
              placeRobot(rowNumber + 1, colNumber);
            !wallMap[`${rowNumber + 1}-${colNumber}`] && setRow(rowNumber + 1);
          }
        } else if (currentDirection === "SOUTH") {
          if (rowNumber === 1) {
            placeRobot(5, colNumber);
            setRow(5);
          } else {
            !wallMap[`${rowNumber - 1}-${colNumber}`] &&
              placeRobot(rowNumber - 1, colNumber);
            !wallMap[`${rowNumber - 1}-${colNumber}`] && setRow(rowNumber - 1);
          }
        } else if (currentDirection === "EAST") {
          if (colNumber === 5) {
            placeRobot(rowNumber, 1);
            setCol(1);
          } else {
            !wallMap[`${rowNumber}-${colNumber + 1}`] &&
              placeRobot(rowNumber, colNumber + 1);
            !wallMap[`${rowNumber}-${colNumber + 1}`] && setCol(colNumber + 1);
          }
        } else {
          if (colNumber === 1) {
            placeRobot(rowNumber, 5);
            setCol(5);
          } else {
            !wallMap[`${rowNumber}-${colNumber - 1}`] &&
              placeRobot(rowNumber, colNumber - 1);
            !wallMap[`${rowNumber}-${colNumber - 1}`] && setCol(colNumber - 1);
          }
        }

        break;

      default:
    }
  };

  return (
    <>
      <div
        style={{
          marginLeft: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <TextField
              type="number"
              placeholder="Row"
              label=" Row Number"
              onChange={(e) => setRow(Number(e.target.value))}
            ></TextField>
            <TextField
              type="number"
              placeholder="Column"
              label=" Column Number"
              onChange={(e) => setCol(Number(e.target.value))}
            ></TextField>
            <TextField
              placeholder="Direction"
              label="Enter facing Direction"
              onChange={(e) => setDirections(e.target.value)}
            ></TextField>
          </div>
          <Button variant="contained" onClick={onClickPlace}>
            PLACE ROBOT
          </Button>
        </div>
        <div
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Button variant="contained" onClick={() => handleClick("LEFT")}>
            LEFT
          </Button>
          <Button variant="contained" onClick={() => handleClick("RIGHT")}>
            RIGHT
          </Button>
          <Button variant="contained" onClick={() => handleClick("MOVE")}>
            MOVE
          </Button>
        </div>
        <div
          style={{
            marginLeft: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TextField
            type="number"
            placeholder="Row"
            label=" Row Number"
            onChange={(e) => setWallRow(Number(e.target.value))}
          ></TextField>
          <TextField
            type="number"
            placeholder="Column"
            label=" Column Number"
            onChange={(e) => setWallCol(Number(e.target.value))}
          ></TextField>
          <Button variant="contained" onClick={() => handleClick("PLACE_WALL")}>
            PLACE WALL
          </Button>
        </div>
        <Button variant="contained">REPORT</Button>
        <div>
           <Typography>ROW:{rowNumber} </Typography>
           <Typography>COL:{colNumber}</Typography>
           <Typography>FACING:{currentDirection}</Typography>

        </div>
      </div>
    </>
  );
};
