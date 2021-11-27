import MenuList from "./MenuList"
import { useState } from "react"

const Menu = () => {

    const [showMenu, setShowMenu] = useState(false)

    const [listItems,setListItems] = useState([
    {
        name: 'list 1',
        isShowing: false,
        value: ['item 1','item 2','item 3']
    },
    {
        name: 'list 2',
        isShowing: false,
        value: ['item 4','item 5','item 6']
    },
    {
        name: 'list 3',
        isShowing: false,
        value: ['item 7','item 8','item 9']
    }
])
  
    const handleShowMenu = () => { 
      setShowMenu(!showMenu)

    }

    return ( 
        <div className="container">
            <div className="menu">
                <div className="dropdown"> <button onClick={handleShowMenu}> {showMenu? '-' : '+'} </button> </div> 
                <div className="menuName"> <text> Menu </text> </div>  
            </div>
            {showMenu && <MenuList listItems= {listItems} setListItems= {setListItems} showMenu={showMenu}/>}
      </div>
     );
}
 
export default Menu;