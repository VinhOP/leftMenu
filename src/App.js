import './App.scss';
import { useEffect, useState } from 'react';
function App() {

  const [showMenu, setShowMenu] = useState(false)
  const [showItem, setShowItem] = useState(false)
  const [selectedList, setSelectedList] = useState()

  const [listItems,setListItems] = useState([
    {
      name: 'list 1',
      isShowing: false,
      id: 0,
      value: ['item 1','item 2','item 3']
    },
    {
      name: 'list 2',
      isShowing: false,
      id: 1,
      value: ['item 4','item 5','item 6']
    },
    {
      name: 'list 3',
      isShowing: false,
      id: 2,
      value: ['item 7','item 8','item 9']
    }
  ])

  // useEffect(() => {
  //   listItems[selectedList] = {...listItems, isShowing: !listItems.isShowing}
  //   console.log(listItems)
  // },[selectedList])

  const handleShowMenu = () => { 
    setShowMenu(!showMenu)
  }

  const handleShowItem = (item,index) => {
    setSelectedList(index)
    listItems[index] = {...item, isShowing: !item.isShowing}
    setListItems([...listItems])
    console.log(listItems)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="menu">
            <div className="dropdown"> <button onClick={handleShowMenu}> {showMenu? '-' : '+'} </button> </div> 
            <div className="menuName"> <text> Menu </text> </div>  
        </div>
        {showMenu && <div className="list">
          <div className="grid-container">
              {listItems.map((item, index) => {
                return <div className="grid-item">
                    <div className="list-items">
                      <button onClick={() => handleShowItem(item,index)}> + </button>
                      <text> {item.name} </text>
                    </div>
                      {item.isShowing && listItems[selectedList].value.map(item => {
                        return <div className="item"> {item} </div>
                      })} 
                  </div>
              })}
          </div>
        </div>}
      </div>
    </div>
  );
}

export default App;
