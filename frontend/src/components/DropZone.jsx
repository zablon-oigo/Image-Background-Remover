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
  const sendImage=async(image)=>{
    try{

    }
    catch(e){
      console.log(e)
      setAlert({isVisible:true, type:'error','msg':'something went wrong...'})
    }
  }
}
    const[isVisible, type, msg]=alert
  return (
    <div>
        {isVisible && <Alert/>}
    </div>
  )
}

export default DropZone