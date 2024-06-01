import Alert from "./Alert";
import { useState } from "react";
function DropZone() {
    const[alert, setAlert]=useSate(
        {
            isVisible:false,
            type:null,
            msg:null,
        }
    );
const onDrop=(file)=>{
  setAlert({
    isVisible:false,
    type:null,
    msg:null,
  })
}
    const[isVisible, type, msg]=alert
  return (
    <div>
        {isVisible && <Alert/>}
    </div>
  )
}

export default DropZone