import React from 'react'
import { useState } from 'react';
import {faTrashAlt} from "react-icons/fa";
const Content = () => {

    const[items,setItems]=useState(
      [
        {
          id:1,
          checked: true,
          item: "pratice coding"
        },
        {
          id:2,
          checked: true,
          item: "Pratice Coding"
        },
        {
          id:3,
          checked: false,
          item: "web development"
        }
      ]);
  return (
    <main>
      <ul>
        {items.map((item)=>(
          <li>
            <input
              type="checkbox"
              checked={item.checked} 
            />
            <label>{item.item}</label>
            <faTrashAlt
              role = "button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Content