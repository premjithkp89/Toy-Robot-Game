

import robo from '../../images/robo.png';

export const RobotImg =(x:any,y:any,angle:any)=>{
 console.log("position",x,y)

return (


<div  style={{backgroundImage:`url(${robo})`,backgroundSize:'contain', transform: `rotate(${angle}deg)`,width:70,height:70, position:'absolute', left :`${x+10}px`,top:`${y+10}px`}}>
</div>
)
}
