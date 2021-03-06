import React from 'react'
import Field from './Field'
import Checkbox from './Checkbox'

export default function TodoItem({
  description,
  completed,
  onComplete,
  onChangeDescription
}){
  return (
    <div className='mb-3'>
      <Checkbox label='Completed' checked={ completed } onChange={ onComplete }/>
      <Field label='Description' value={ description } onChange={ onChangeDescription }/>
    </div>
  )
}