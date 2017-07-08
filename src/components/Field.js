import React from 'react'

export default function Field({
  value,
  label,
  onChange
}){
  return (
    <label className='flex-row'>
     { label }
     {' '}
     <input type ='text' 
       value={ value } 
       onChange={ 
         (event) => {
           const value = event.target.value 
           onChange(value)
         }
       }
     />
    </label>
  )
}