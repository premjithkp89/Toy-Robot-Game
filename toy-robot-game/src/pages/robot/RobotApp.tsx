import React, { FC } from "react";
import { InputSection } from '../../components/InputSection';
import GameBoard from '../../components/gameBoard'

export const RobotApp: FC<{}> = () => {

    return(
    <>
        <div style={{display:"flex",flexDirection:'row',justifyContent: 'space-between'}}>
          <GameBoard />
          <InputSection />
        </div>
    </>
    );
}