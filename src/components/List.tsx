import React from "react"
import ListItem, { Item } from "./ListItem"



type ListProps = {
    items:Item[]
}



const ulStyles: React.CSSProperties = {
    display:'flex',
    gap:'10px',
    listStyleType:'none',
    flexDirection:'column'
}

const  List = React.memo((props:ListProps)=>{
    const listItems = props.items.map(item=>{

        return (<ListItem key={item.id} item={item}></ListItem>)
    })

    return (<>
        <ul style={ulStyles}>
            {listItems}
        </ul>
    </>)
})

export default List