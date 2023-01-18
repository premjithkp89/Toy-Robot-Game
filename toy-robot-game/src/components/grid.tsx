import React, { FC,useRef } from "react";


// const getPosition = ()=>{

//     const domNode = ReactDOM.findDOMNode(icon);
// domNode.getBoundingClientRect()
// }

const col =(key:number)=>{

return(
<div style={{height:"3em", width:"3em", margin: "0.1em", backgroundColor:"lightGrey", borderRadius:"0.3em"}}>
{ key === 0 && <div style={{marginTop:"2em"}}>

   </div>
}
</div>
)
}

export const Table: FC<{}> = () => {
    let rows = [];

    let cols = [];



    for(let j=0; j < 5; j++) {
    cols.push(<div style={{display:"inline-block"}} key={j}>{col(j)}

    </div>)
    }

    for(let i=0; i<5; i++) {
    rows.push(<div style={{display:"block", margin: 0}} key={"row"+i}>{cols}

    </div>)
    }

    return (
        <>
            {rows}
        </>
    );

}
