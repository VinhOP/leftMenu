import { useState } from "react"

const MenuList = ({listItems, setListItems}) => {

    const handleShowItem = (item,index) => {
        listItems[index] = {...item, isShowing: !item.isShowing}
        setListItems([...listItems])
    }

    return ( 
    <div className="list">
        <div className="grid-container">
            {listItems.map((item, index) => {
                return <div className="grid-item">
                    <div className="list-items">
                    <button onClick={() => handleShowItem(item,index)}> {item.isShowing? '-' : '+'} </button>
                    <text> {item.name} </text>
                    </div>
                    {item.isShowing && listItems[index].value.map((item) => {
                        return <div className="item"> {item} </div>
                    })}
                </div>
            })}
        </div>
    </div>
    );
}
 
export default MenuList;