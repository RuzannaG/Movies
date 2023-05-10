import { useState } from "react"
 
 export const Comments=({setShow, setMovie })=>{


    const [comm, setComm]=useState()

    const hadleCom= (e)=>{
        setComm(e.target.value)
        console.log(comm)
     }
const save=()=>{
    setMovie({
        id:Math.random(),
       
        comments:comm
    })
    console.log(comm)
}

    return(
        <div className="modal"> 
<div className="modal-flex">
    <input type="text" onChange={hadleCom}/>
    <button onClick={save}>add</button>
    <button onClick={()=>setShow(null)}>Close</button>
</div>
</div>
    )
}