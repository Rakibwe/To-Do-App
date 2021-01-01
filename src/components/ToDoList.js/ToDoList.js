import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeToDo } from '../../redux/actions/toDoActions';

const ToDoList = ({ product, removeToDo }) => {
    // const [verify, setVerify] = useState(false);
    const [toDo, setToDo] = useState({
        isEdit: false,
        id: ''
    });
    // const nweId = toDo.id;
    // console.log(toDo)
    // const handleChange = (e) => {
    //     console.log(e.target.value,'input value')
    // }
    const handleEdit = (update, key) => {
        setToDo({ isEdit: update, id: key })
    }

    // const checkOut = product.filter(toDoKey => toDoKey.toDoId == nweId);
    // setVerify(checkOut)


    return (
        <div>
            { toDo.isEdit && <input type="text" />}
            {
                product.map(item => <h2 key={item.toDoId}>
                    <small>{item.toDoId}</small>{item.pd}
                    <button onClick={() => removeToDo(item.toDoId)}>
                        DELETE</button>
                    <button onClick={() => handleEdit(true, item.toDoId)}>EDIT</button>
                    {/* {
                        toDo.isEdit ? <button>UPDATE</button> : <button onClick={() => handleEdit(true,item.toDoId)}>EDIT</button>
                    } */}
                </h2>)
            }
        </div>
    );
};
const mapStateToProps = state => {
    return { product: state.toDoItem }
};

const mapDispatchToProps = {
    removeToDo: removeToDo
}


export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);