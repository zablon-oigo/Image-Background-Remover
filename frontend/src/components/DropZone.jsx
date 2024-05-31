import Alert from "./Alert";
import { useState } from "react";
function DropZone() {
    const[alert, setAlert]=useSate(
        {
            isVisible:true,
            type:null,
            msg:null,
        }
    );

    const[isVisible, type, msg]=alert
  return (
    <div>
        {alert.isVisible && <Alert/>}
    </div>
  )
}

export default DropZone