import * as C from './styles'
import { Item } from '../../types/Item'
import { useState } from 'react'

type Props = {
  item: Item,
  onCheckboxChange: (itemId: number) => void
}
export const ListItem = ({ item, onCheckboxChange }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedValue = e.target.checked
    setIsChecked(newCheckedValue)
    onCheckboxChange(item.id)
  }

  return (
    <C.Container done={isChecked}>
      <input 
        type="checkbox" 
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label>{item.name}</label>
    </C.Container>
  )
}
