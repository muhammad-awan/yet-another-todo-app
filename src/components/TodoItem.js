import React from 'react'
import Field from './Field'
import Checkbox from './Checkbox'

export default function TodoItem({
  description,
  completed
}){
  return (
    <div className='mb-3'>
      <Checkbox label='Completed' checked= { completed }/>
      <Field label='Description' value={ description }/>
    </div>
  )
}