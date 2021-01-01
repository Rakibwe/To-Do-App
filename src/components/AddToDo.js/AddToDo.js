import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../../redux/actions/toDoActions';
import { useForm } from "react-hook-form";

const AddToDo = (props) => {
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
        </div>
    );
};



const mapDispatchToProps = {
    addToDo: addToDo
}

export default connect(null, mapDispatchToProps)(AddToDo);
