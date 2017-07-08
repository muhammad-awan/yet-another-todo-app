import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({
  items,
  onCompleteItem,
  onChangeItemDescription
}){
  return (
    <div>
    {
      items.map( (item) => (
          <TodoItem
            key = { item._id }
            completed={ item.completed }
            description={ item.description }
            onComplete={ () => onCompleteItem(item._id) }
            onChangeDescription={ (newDescription) =>
              onChangeItemDescription(item._id, newDescription)
            }
          />
      ))
    }
    </div>
  )
}