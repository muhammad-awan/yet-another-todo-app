import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({
  items
}){
  return (
    <div>
    {
      items.map( (item) => (
          <TodoItem
            completed={ item.completed }
            description={ item.description }
          />
      ))
    }
    </div>
  )
}