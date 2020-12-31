import React from 'react';
import { removeToDo } from '../../redux/actions/toDoActions';

const ToDoList = ({item}) => {
    // console.log(item)
    return (
        <div>
          <h2><small>{item.toDoId}</small>{item.pd}</h2>
          <button onClick={() => removeToDo(item.toDoId)}>DELETE</button>
          <button>EDIT</button>
        </div>
    );
};
//{() => removeFromCart(product.cartId)}
export default ToDoList;