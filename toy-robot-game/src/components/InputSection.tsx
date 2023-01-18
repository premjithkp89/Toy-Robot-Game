import React, { FC, } from "react"
import { useDispatch,useSelector } from "react-redux";

import { setRowNumber,setColNumber,setDirection,setAngle,setShowRobot,setXOffset,setYOffset ,setWallMap} from "../redux/reducers/inputReducer";
import { RootState } from "../redux/store";


export const InputSection: FC<{}> = () => {

    const dispatch = useDispatch();

    const rowNumber = useSelector(
        (state: RootState) => state.placeRobot.row
      );

      const colNumber = useSelector(
        (state: RootState) => state.placeRobot.column
      );

      const currentDirection = useSelector(
        (state: RootState) => state.placeRobot.direction
      );

      const wallMap = useSelector(
        (state: RootState) => state.placeRobot.wallMap
      );


    const setRow = (row: number) => {
        if(rowNumber > 0 && rowNumber <6 ){
            dispatch(setRowNumber({row:row}));
           }
    }

    const setCol = (col: number) => {
        if(colNumber > 0 && colNumber <6  ){
            console.log("COL",col)
            dispatch(setColNumber({col:col}));
        }

    }


    const setDirections = (direction: any) => {
        dispatch(setDirection({direction:direction}));

    }

    const updateAngle = (direction: string) => {
        dispatch(setAngle({facing:direction}))
    }

    const onClickPlace = () => {
        dispatch(setShowRobot({showRobot:true}))
        placeRobot(rowNumber,colNumber)
    }

      const placeRobot = (row:number,column:number) => {
          console.log("rowNumber",row,column)
        const cell = document.getElementById(`${row}-${column}`);
        const domRect = cell?.getBoundingClientRect()
        domRect && dispatch(setXOffset({xCordinate: domRect.x}));
        domRect && dispatch(setYOffset({yCordinate : domRect.y}));

    };

    const placeWall = (row?:number,col?:number,dir?:string,) => {
        dispatch(setWallMap({newKey:{[`${row}-${col}`]:true}}))
    };


    const handleClick = (command: string,row?:number,column?:number) => {

        switch (command) {
          case "RIGHT":
            updateAngle('RIGHT')
            break;
          case "LEFT":
            updateAngle('LEFT')
            break;

             case "PLACE_WALL":
                placeWall(3,3)
              break;

              case "MOVE":
              console.log("LOG",currentDirection,rowNumber,colNumber)
                 if(currentDirection==="NORTH"){
                  if(rowNumber===5){

                    placeRobot(1,colNumber)
                    setRow(1)
                  }
                  else{
                    !wallMap[`${rowNumber+1}-${colNumber}`] && placeRobot(rowNumber+1,colNumber)
                    !wallMap[`${rowNumber+1}-${colNumber}`] && setRow(rowNumber+1)

                  }


                 }
                 else if(currentDirection==="SOUTH"){
                  if(rowNumber===1){

                    placeRobot(5,colNumber)
                    setRow(5)
                  }

                  else{

                    !wallMap[`${rowNumber-1}-${colNumber}`] && placeRobot(rowNumber-1,colNumber)
                    !wallMap[`${rowNumber-1}-${colNumber}`] &&  setRow(rowNumber-1)

                  }


                 }
                 else if(currentDirection==="EAST"){

                  if(colNumber===5){

                    placeRobot(rowNumber,1)
                    setCol(1)
                  }

                  else{

                    !wallMap[`${rowNumber}-${colNumber + 1}`] && placeRobot(rowNumber,colNumber+1)
                    !wallMap[`${rowNumber}-${colNumber + 1}`] && setCol(colNumber+1)
                  }

                }
                else{
                  if(colNumber===1){

                    placeRobot(rowNumber,5)
                    setCol(5)
                  }

                  else{

                    !wallMap[`${rowNumber}-${colNumber-1}`] && placeRobot(rowNumber,colNumber-1)
                    !wallMap[`${rowNumber}-${colNumber-1}`] &&  setCol(colNumber-1)
                  }

                }

              break;

            default:
        }

      };


    return(
        <>

            <div style={{marginTop:"1em"}}>

                <input type="number" style={{width:"3em", height:"3em", marginRight:"0.5em"}} placeholder="x" onChange={e => setRow(Number(e.target.value))} name="xpos"></input>
                <input type="number" style={{width:"3em", height:"3em", marginRight:"0.5em"}} placeholder="y" onChange={e => setCol(Number(e.target.value))} name="ypos"></input>
                <input type="text" style={{width:"5em", height:"3em", marginRight:"0.5em" }} placeholder="direction" onChange={e => setDirections(e.target.value)} name="facing"></input>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}} onClick={onClickPlace}>
                    PLACE
                </button>

            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}} onClick={()=>handleClick("MOVE")}>MOVE</button>
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}} onClick={()=>handleClick("LEFT")}>LEFT</button>
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}} onClick={()=>handleClick("RIGHT")}>RIGHT</button>
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}} onClick={()=>handleClick("PLACE_WALL")}>PLACE WALL</button>
            </div>
            <div style={{marginTop:"1em"}}>
                <button style={{padding:"0.5em", border: 0, backgroundColor:"#6B5B95", color:"white"}}>REPORT</button>
            </div>
            <div id="reportSection">
            </div>

        </>
    )
}