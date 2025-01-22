import { useRef, useState } from 'react'
import './App.css'
import List from './components/List'
import { Item } from './components/ListItem'


function App() {
  let items:Item[] = [
    {
      id:1,
      name:'test1'
    },
    {
      id:2,
      name:'test2'
    },
    {
      id:3,
      name:'test3'
    },
    {
      id:4,
      name:'test4'
    }
  ]
  
  const [text,setText]=useState('')
  const container = useRef<HTMLInputElement>(null)
  const focus = ()=>{
    if(container !== null){
      container.current?.focus()
    }
  }

  const handleKeyPress = (event:any)=>{
    if(event.key === "Enter"){
      const id = items.length+1;
      const item:Item = {id,name:text}
      items =  [...items,item];
      setText('')
    }
  }

  const onChangeInput = (event:any)=>{
    if(event.target !== null){

      setText(event.target.value)
    }
  }

  return (
    <>
      <div>
        <input ref={container} value={text} defaultValue={text} onChange={onChangeInput} onKeyDown={handleKeyPress}></input>
        <button onClick={focus}>фокус</button>
      </div>
      <List items={items}></List>
    </>
  )
}

export default App
