import React from 'react';
import { connect } from 'react-redux';
import { removeToDo } from '../../redux/actions/toDoActions';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({ product, removeToDo }) => {

    return (
        <div>
            {
                product.map(item => <ToDoItem key={item.toDoId} item={item} removeToDo={removeToDo} />)
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