import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import allActions from "../actions";
import Form from "../components/Form";


const AddTask = props => {

  const [input,setInput] = useState('');
  const dispatch = useDispatch();


  const formSubmit = event => {
    event.preventDefault();
    dispatch(allActions.Task.addTask(input));
    setInput('');
    props.close();
  }

  return (
    <div className="container mt-3 border-bottom">
      <div className="row">
        <div className="col-md-12">
          <Form formSubmit={formSubmit} input={input} setInput={setInput} buttonText={"Добавить задачу"}/>
        </div>
      </div>
    </div>
  )

}

export default AddTask;
