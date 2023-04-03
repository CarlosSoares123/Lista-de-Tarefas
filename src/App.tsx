import { useState } from 'react'
import * as C from './App.styles'
import { Item } from './types/Item'
import { ListItem } from './components/ListemItem'
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList]= useState<Item[]>([
    {
      id:1, name: 'Comprar o roupa', done: false
    },
    {
      id:2, name : 'Sair de casa', done: true
    }
  ])


  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })
    setList(newList)
  }


  const handleCheckboxChange = (itemId: number) => {
    let newList = [...list]
    newList.forEach((item) => {
      if (item.id === itemId) {
        item.done = !item.done
      }
    })
    setList(newList)
  }

  return(
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />
        
        {list.map((item, index) => (
          <ListItem 
          key={index} 
          item={item}
          onCheckboxChange={handleCheckboxChange}
          />
        ))} 
      </C.Area>
    </C.Container>
  )
}

export default App