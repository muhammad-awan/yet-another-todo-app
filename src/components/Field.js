import React from 'react'

export default function Field({
  value,
  label
}){
  return (
    <label>
     { label }
     {' '} 
     <input value={ value } />
    </label>
  )
}