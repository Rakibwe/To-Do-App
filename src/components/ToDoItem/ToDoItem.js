import React, { useState } from 'react';
import { connect,} from 'react-redux';
import { updateToDoItem } from '../../redux/actions/toDoActions';

const ToDoItem = ({ item, removeToDo,updateToDoItem }) => {
    const toDoNames = item.pd;
    const updateKey = item.toDoId;
    const [updateToDo, setUpdateToDo] = useState(false);
    // const [toDoName, setToDoName] = useState(toDoNames);
    // const dispatch = useDispatch();
      toDoName()
    // console.log(toDoName())
    return (
        <div>
            <h4>#{item.toDoId}</h4>
            {updateToDo ? <input type="text" onChange={(e) => toDoName(e.target.value)} value={toDoNames} /> : <h2>{item.pd}</h2>}
            <button onClick={() => removeToDo(item.toDoId)}>
                DELETE</button>
            <button
                onClick={() => {
                    if (updateToDo) {
                        updateToDoItem(
                            {
                                updateKey,
                                toDoName
                            }
                        );


                    }
                    setUpdateToDo(!updateToDo)
                }} >
                {updateToDo ? "UPDATE" : "EDIT"}
            </button>
        </div>
    );
};

const mapDispatchToProps = {
    updateToDoItem: updateToDoItem
}


export default connect(null,mapDispatchToProps) (ToDoItem);