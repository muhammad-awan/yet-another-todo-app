import React from 'react'

export default function Field({
  value,
  label
}){
  return (
    <label className='flex-row'>
     { label }
     {' '}
     <input type ='text' value={ value } />
    </label>
  )
}