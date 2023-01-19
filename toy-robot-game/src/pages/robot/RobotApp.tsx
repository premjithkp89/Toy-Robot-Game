
import  CommandInput from '../../components/commandInputs';
import GameBoard from '../../components/gameBoard'

export const RobotApp = () => {

    return(
    <>
        <div data-testid="robot" style={{display:"flex",flexDirection:'row',justifyContent: 'space-between'}}>
          <GameBoard />
          <CommandInput />
        </div>
    </>
    );
}