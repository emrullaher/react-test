import React, { useState } from 'react'

function SingleItem({item, removeitem}) {
  
  const [isChecked, setchecked] = useState(item.completed)

  return (
    <div className='single-item'>
    <input type='checkbox' 
     checked = {isChecked}
     onChange={()=>setchecked(!isChecked)}
    />
      <p style={{textDecoration: isChecked && 'line-through'}}>{item.name}</p>
      <button className='btn remove-btn' type='button'
      onClick={()=>removeitem(item.id)}
      >
        remove item
      </button>
    </div>
  )
}

export default SingleItem
