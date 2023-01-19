import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography } from "@material-ui/core";
import { Select, MenuItem, FormHelperText, FormControl, InputLabel } from '@material-ui/core';
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

  const wallRowNumber = useSelector((state: RootState) => state.placeRobot.wallRow);

  const wallColNumber = useSelector((state: RootState) => state.placeRobot.wallColumn);



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
          marginLeft: 50,
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
    <FormControl required variant="outlined" style={{ marginRight: 10}}>
      <InputLabel shrink>Rows</InputLabel>
      <Select  label = 'Rows' value={rowNumber} onChange={(e=>setRow(Number(e.target.value)))} >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <FormHelperText>Select row</FormHelperText>
    </FormControl>

    <FormControl required variant="outlined" style={{ marginRight: 10}}>
      <InputLabel shrink>Column</InputLabel>
      <Select  label = 'Column' value={colNumber} onChange={(e=>setCol(Number(e.target.value)))} >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <FormHelperText>Select column</FormHelperText>
    </FormControl>
    <FormControl required variant="outlined" style={{ marginRight: 10}}>
      <InputLabel shrink>Direction</InputLabel>
      <Select label='Direction' value={currentDirection} onChange={(e=>setDirections(e.target.value))} >
        <MenuItem value={'NORTH'}>NORTH</MenuItem>
        <MenuItem value={'SOUTH'}>SOUTH</MenuItem>
        <MenuItem value={'EAST'}>EAST</MenuItem>
        <MenuItem value={'WEST'}>WEST</MenuItem>
      </Select>
      <FormHelperText>Select direction</FormHelperText>
    </FormControl>
          </div>
          <div style={{  height:0}}><Button variant="outlined" size='medium' color='primary'  onClick={onClickPlace}>
            PLACE ROBOT
          </Button></div>

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
 <FormControl required variant="outlined" style={{ marginRight: 10}}>
      <InputLabel shrink>Rows</InputLabel>
      <Select  label = 'Rows' value={wallRowNumber} onChange={(e=>setWallRow(Number(e.target.value)))} >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <FormHelperText>Select row</FormHelperText>
    </FormControl>

    <FormControl required variant="outlined" style={{ marginRight: 10}}>
      <InputLabel shrink>Column</InputLabel>
      <Select  label = 'Column' value={wallColNumber} onChange={(e=>setWallCol(Number(e.target.value)))} >
        <MenuItem value={1}>1</MenuItem>
        <MenuItem value={2}>2</MenuItem>
        <MenuItem value={3}>3</MenuItem>
        <MenuItem value={4}>4</MenuItem>
        <MenuItem value={5}>5</MenuItem>
      </Select>
      <FormHelperText>Select column</FormHelperText>
    </FormControl>
    <div style={{  height:0}}><Button variant="outlined" size='medium' color='primary'  onClick={()=>handleClick('PLACE_WALL')}>
            PLACE WALL
          </Button></div>
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
