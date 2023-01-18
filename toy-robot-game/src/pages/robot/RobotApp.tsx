import React, { FC } from "react";
import  ToyRobot  from './robot';
import { InputSection } from '../../components/InputSection';

export const RobotApp: FC<{}> = () => {

    return(
    <>
    <div style={{display:'flex',flexDirection:'row'}}>

        <div style={{display:"inline-block"}}>
          <ToyRobot />
        </div>
        <div style={{display:"inline-block", width:"40%", verticalAlign:"top"}}>
          <InputSection />
        </div>
        </div>
    </>
    );
}