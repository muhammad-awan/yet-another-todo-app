import React from 'react'

export default function Checkbox({
  checked,
  label,
  onChange
}){
  return (
    <label>
     <input type="checkbox" checked={ checked } onChange = { onChange }/>
     {' '}
     { label } 
    </label>
  )
}