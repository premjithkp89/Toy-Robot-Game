

import robo from '../../images/robo.png';
import brick from '../../images/brick.png';

export const RobotImg =(x:any,y:any,angle:any)=>{
 console.log("position",x,y)

return (


<div  style={{backgroundImage:`url(${robo})`,backgroundSize:'contain', transform: `rotate(${angle}deg)`,width:70,height:70, position:'absolute', left :`${x+10}px`,top:`${y+20}px`}}>
</div>
)
}

export const BrickImg =(x:any,y:any,angle:any)=>{


   return (


   <div style={{ position:'absolute', left :`${x}px`,bottom:`${y}px` ,alignItems:'center'}}>
   <img src={brick}  alt={''} />
   </div>
   )
   }