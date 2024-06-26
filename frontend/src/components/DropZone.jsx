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
    const response=fetch(`${url}/images${id}/download`,{
      method:'GET',
      responseType:'blob',
    })
    const data =(await response).blob()
    const href = window.URL.createObjectURL(data)
    const downloadLink = document.createElement('a')
    downloadLink.href =href
    downloadLink.setAttribute('download','removed_bg_img.png')
    document.body.appendChild(downloadLink)
    downloadLink.click()
    document.body.removeChild(downloadLink)
    setAlert({
      isVisible:true,
      type:"success",
      msg:"success",
    })

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