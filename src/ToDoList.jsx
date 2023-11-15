import React from "react";

const ToDoList = (props) => {
  //   const deleteItem = () => {
  //     console.log("deleted");
  //   };

  return (
    <>
      <div className="list-main">
        <span className="close-icon">
          <i
            className="fa fa-times-circle"
            aria-hidden="true"
            onClick={() => {
              props.onSelect(props.id);
            }}
            // onClick={props.onSelect}
          ></i>
        </span>
        <li>{props.todotext}</li>
      </div>
    </>
  );
};

export default ToDoList;
