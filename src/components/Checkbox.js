import React from 'react'

export default function Checkbox({
  checked,
  label
}){
  return (
    <label>
     <input type="checkbox" checked={ checked } />
     { label } 
    </label>
  )
}