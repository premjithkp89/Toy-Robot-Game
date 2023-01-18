
import GameBoard from '../../components/gameBoard'

const ToyRobot = () => {
  const placeWall = (row?:number,col?:number,dir?:string,) => {
      // setWallMap({...wallMap,[`${row}-${col}`]:true})
  };


  return (
    <div>
     <GameBoard />
    </div>
  );
};

export default ToyRobot;
