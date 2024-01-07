import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import Form from './Form'
import Items from './Items'
import {nanoid } from 'nanoid'

function App() {
  const [items,setItems] = useState([])

    const addItem = (itemName) =>{
      const newItem = {
        name : itemName,
        completed : false ,
        id : nanoid()
      };
      setItems([...items, newItem])
    }
 
    const removeitem= (itemId) =>{
      const newItems = items.filter((item)=> item.id !== itemId);
      setItems(newItems)
    }

  return (
    <section className='section-center'> 
    <Form  addItem={addItem}/>
    <Items items= {items} removeitem = {removeitem}/>
    
    </section>
  )
}

export default App
