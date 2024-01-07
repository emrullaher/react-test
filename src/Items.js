import React from 'react'
import SingleItem from './SingleItem'
function Items({items, removeitem}) {
  return ( 
    <div className='items'>
      {items.map((item)=>{
        return < SingleItem key = {item.id} item ={item} removeitem= {removeitem}/>
      })}
    </div>

  )
}

export default Items
