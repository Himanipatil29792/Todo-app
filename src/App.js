import React, { useState } from "react";
import ToDoList from "./ToDoList";

function App() {
  const [stext, SetText] = useState();
  const [sfulltext, SetFullText] = useState([]);

  const inputOnChange = (event) => {
    console.log(event.target.value);
    SetText(event.target.value);
  };

  // const onSubmits = (event) => {
  //   event.preventDefault();
  //   SetFullText(stext);
  // };

  const listOfItems = () => {
    SetFullText((oldItem) => {
      return [...oldItem, stext];
    });
    SetText("");
  };

  const deleteItem = (id) => {
    console.log("deleted");

    SetFullText((oldItem) => {
      return oldItem.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1 className="main-heading">ToDo List</h1>
          <br />
          {/* <form onSubmit={onSubmits}> */}
          <div className="content-style">
            <input
              type="text"
              placeholder="Add a Items"
              defaultValue=""
              value={stext}
              onChange={inputOnChange}
            />

            {/* <button  type="submit"></button> */}
            <button onClick={listOfItems} className="plusbtn">
              +
            </button>
          </div>
          {/* </form> */}

          <ol>
            {/* <li> {sfulltext}</li> */}
            {sfulltext.map((itemval, index) => {
              return (
                <ToDoList
                  key={index}
                  id={index}
                  todotext={itemval}
                  onSelect={deleteItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
