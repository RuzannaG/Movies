import { useState } from "react"
 
 export const Comments=({setShow, movie, setMovie,  })=>{


    const [comm, setComm]=useState()

    const hadleCom= (e)=>{
        setComm(e.target.value)
        console.log(comm)
     }
const hadleAdd=()=>{
  
        setMovie([...movie,{
            id:Math.random(),

            comments:''
        }])
    
    
}
console.log(comm)

    return(
        <div className="modal"> 
<div className="modal-flex">
    <input type="text" onChange={hadleCom}/>
    <button onClick={hadleAdd}>add</button>
    <button onClick={()=>setShow(null)}>Close</button>
</div>
</div>
    )
}