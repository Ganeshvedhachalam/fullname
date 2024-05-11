 import React, { useState } from "react"
 

 function FullName() {
    const[firstname,setFirstname]=useState("");
    const[lastname,setLastname]=useState("");
    const [fullname ,setFullname]= useState("");
    

    
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(firstname&&lastname){
             setFullname( `Full Name: ${firstname} ${lastname}`)
             console.log(fullname)
            }
       
       
        
       
    }

    const handlechangeFirst = (e) => {
        setFirstname( e.target.value)

    }
    const handlechangeLast = (e) => {
        setLastname( e.target.value)

    }

    // const isSubmitDisabled = !firstname || !lastname;
    



   return (
        <div>
            <div 
            // style={{display:"flex", flexDirection:"column" ,justifyContent:"center",alignItems:"center"} }
            >
                <h1>Full Name Display</h1>
            <form   onSubmit={handleSubmit} >

                <label>First Name: <input  type="text" value={firstname} onChange={handlechangeFirst}/> </label>
                 <br />
                <label>Last Name: <input type="text" value ={lastname} onChange={handlechangeLast} /> </label><br />
                <button type="submit" style={{padding:"5px"}} > 
                Submit
                </button>
            </form>
            {fullname && <p>{fullname}</p>}
            </div>

            

            
        </div>
    )
 }

 export default FullName;