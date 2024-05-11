 import React, { useState } from "react"
 

 function FullName() {
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const [fullname ,setFullname]= useState("");
    

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        setFullname( `Full Name: ${firstname} ${lastname}`)
       
        console.log(fullname)
       
    }

    const handlechangeFirst = (e) => {
        setFirstname( e.target.value)

    }
    const handlechangeLast = (e) => {
        setLastname( e.target.value)

    }
    const issubmitdisabled= ()=>{
        
        return (!firstname || !lastname)
    }



   return (
        <div>
            <div 
            // style={{display:"flex", flexDirection:"column" ,justifyContent:"center",alignItems:"center"} }
            >
            <form   onSubmit={handleSubmit} style={{ width:"500px",height:"200px"}}>

                <label>First Name: <input  type="text" value={firstname} onChange={handlechangeFirst}/> </label>
                 <br />
                <label>Last Name: <input type="text" value ={lastname} onChange={handlechangeLast} /> </label><br />
                <button type="submit" style={{padding:"5px"}} disabled={issubmitdisabled()}> 
                Submit
                </button>
            </form>
            {fullname && <p>{fullname}</p>}
            </div>

            

            
        </div>
    )
 }

 export default FullName;