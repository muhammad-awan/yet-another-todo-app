const itemKey = 'todoItems'

export function saveItems(items){
  localStorage.setItem(itemKey, JSON.stringify(items))
}

export function readItems(){
  const itemsJSON = localStorage.getItem(itemKey)
  try{
    return JSON.parse(itemsJSON) || []
  }
  catch(error){
    return []
  }
}