import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../redux/actions/toDoActions';
import { useForm } from "react-hook-form";
import ToDoList from '../ToDoList.js/ToDoList';

const AddToDo = (props) => {
    //  console.log(props)
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = inputData => {
     props.addToDo(inputData)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="text" type="text" placeholder="ADD TO DO" ref={register({ required: true })} />
                <input type="submit" value="AddToDo" />
                <br />
                {errors.text && <span style={{ color: 'red' }}>This field is required</span>}
            </form>
            {
                props.product.map(item => <ToDoList item={item}/>)
            }
        </div>
    );
};

const mapStateToProps = state => {
    return {product:state.toDoItem}  
};

const mapDispatchToProps = {
    addToDo: addToDo
}

export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);
