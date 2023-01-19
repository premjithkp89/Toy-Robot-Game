import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@material-ui/core";
import {
  COMMANDS,
  DIRECTIONS,
  ROW_VALUES,
  COLUMN_VALUES,
  DIRECTION_VALUES,
} from "../constants";
import InputCommands from "../views/selection";
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
import { useStyles } from "../styles/commandInputs.styles";

export const InputSection: FC<{}> = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const rowNumber = useSelector((state: RootState) => state.placeRobot.row);

  const colNumber = useSelector((state: RootState) => state.placeRobot.column);

  const wallRowNumber = useSelector(
    (state: RootState) => state.placeRobot.wallRow
  );

  const wallColNumber = useSelector(
    (state: RootState) => state.placeRobot.wallColumn
  );

  const currentDirection = useSelector(
    (state: RootState) => state.placeRobot.direction
  );

  const wallMap = useSelector((state: RootState) => state.placeRobot.wallMap);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "direction") {
      setDirections(e.target.value);
    } else if (e.target.name === "rows") {
      setRow(Number(e.target.value));
    } else if (e.target.name === "wall-rows") {
      setWallRow(Number(e.target.value));
    } else if (e.target.name === "cols") {
      setCol(Number(e.target.value));
    } else {
      setWallCol(Number(e.target.value));
    }
  };

  const setRow = (row: number) => {

      dispatch(setRowNumber({ row: row }));

  };

  const setCol = (col: number) => {

      dispatch(setColNumber({ col: col }));

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
      case COMMANDS.RIGHT:
        updateAngle(COMMANDS.RIGHT);
        break;
      case COMMANDS.LEFT:
        updateAngle(COMMANDS.LEFT);
        break;

      case COMMANDS.PLACE_WALL:
        placeWall();
        break;

      case COMMANDS.MOVE:
        if (currentDirection === DIRECTIONS.NORTH) {
          if (rowNumber === 5) {
            placeRobot(1, colNumber);
            setRow(1);
          } else {
            !wallMap[`${rowNumber + 1}-${colNumber}`] &&
              placeRobot(rowNumber + 1, colNumber);
            !wallMap[`${rowNumber + 1}-${colNumber}`] && setRow(rowNumber + 1);
          }
        } else if (currentDirection === DIRECTIONS.SOUTH) {
          if (rowNumber === 1) {
            placeRobot(5, colNumber);
            setRow(5);
          } else {
            !wallMap[`${rowNumber - 1}-${colNumber}`] &&
              placeRobot(rowNumber - 1, colNumber);
            !wallMap[`${rowNumber - 1}-${colNumber}`] && setRow(rowNumber - 1);
          }
        } else if (currentDirection === DIRECTIONS.EAST) {
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
      <div className={classes.container}>
        <div className={classes.placeRobotContainer}>
          <div>
            <InputCommands
              id={"rows"}
              label={"Rows"}
              helperText={"Select row"}
              values={ROW_VALUES}
              value={rowNumber}
              onChange={onChangeInput}
            />

            <InputCommands
              id={"cols"}
              label={"Column"}
              helperText={"Select column"}
              values={COLUMN_VALUES}
              value={colNumber}
              onChange={onChangeInput}
            />

            <InputCommands
              id={"direction"}
              label={"Direction"}
              helperText={"Select direction"}
              values={DIRECTION_VALUES}
              value={currentDirection}
              onChange={onChangeInput}
            />
          </div>
          <div style={{ height: 0 }}>
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              onClick={onClickPlace}
              disabled={rowNumber===-1 || colNumber===-1 || !currentDirection}
            >
              PLACE ROBOT
            </Button>
          </div>
        </div>
        <div className={classes.commandButtonContainer}>
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
        <div className={classes.placeRobotContainer}>
          <InputCommands
            id={"wall-rows"}
            label={"Row"}
            helperText={"Select row"}
            values={ROW_VALUES}
            value={wallRowNumber}
            onChange={onChangeInput}
          />
          <InputCommands
            id={"wall-cols"}
            label={"Column"}
            helperText={"Select column"}
            values={COLUMN_VALUES}
            value={wallColNumber}
            onChange={onChangeInput}
          />
          <div style={{ height: 0 }}>
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              disabled={wallRowNumber===-1 || wallColNumber===-1}
              onClick={() => handleClick("PLACE_WALL")}
            >
              PLACE WALL
            </Button>
          </div>
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
