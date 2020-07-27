import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import allActions from "../actions";
import Form from "../components/Form";
import {getTodayDate} from '../services/functions';


const AddTask = props => {



  const [input,setInput] = useState({
    title: 'Добавить задачу',
    date: getTodayDate()
  });
  const dispatch = useDispatch();


  const formSubmit = event => {
    event.preventDefault();
    dispatch(allActions.Task.addTask(input));
    setInput({title: "",date: ''});
    props.close();
  }

  return (
    <div className="mt-3 border-bottom">
      <Form formSubmit={formSubmit} input={input} setInput={setInput} buttonText={"Добавить задачу"}/>
    </div>
  )

}

export default AddTask;
