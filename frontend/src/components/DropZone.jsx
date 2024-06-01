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
      let formData=new FormData()
      formData('img',image[0],image[0].name)
      const response=await fetch(`${url}/images/`, {
        method:"POST",
        body:formData
      })
      const data=await response.json()
      const {id}=data
      getImage(id)

    }
    catch(e){
      console.log(e)
      setAlert({isVisible:true, type:'error','msg':'something went wrong...'})
    }
  }
}
const getImage=async(id)=>{
  try{

  }
  catch (e){
    console.log(e)
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