import React from "react"
import { useState } from "react"

export interface Item{
    id:number,
    name:string
} 
type ListItemProps = {
    item:Item
}

const liStyles: React.CSSProperties = {
    display:'flex',
    gap:'20px'
}
const ListItem = React.memo((props:ListItemProps)=>{
    const [container,setContainer] = useState('')

    const buttonHandle = ()=>{
        setContainer(`${container}!`)
    }
    return (<li style={liStyles}>
        <div>{container}</div>
        <div>{props.item.id}</div>
        <div>{props.item.name}</div>
        <button onClick={buttonHandle}>togle</button>
    </li>)
})

export default ListItem