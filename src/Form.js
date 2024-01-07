import { useState } from "react";

const Form = ({addItem}) =>{
    const [newitemName , setNewItemName] = useState('')
    const handleSubmit = (e) =>{
        e.preventDefault();
     if(!newitemName) return;
     addItem(newitemName)
     setNewItemName("")
        console.log(newitemName)
    }
    

    return <form onSubmit={handleSubmit}> 
      <h4>Menu </h4>
      <div className="form-control">
        <input type="text" className="form-input" value={newitemName} onChange={(event)=>setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">Add items</button>
      </div> 
    </form>
}
export default Form;