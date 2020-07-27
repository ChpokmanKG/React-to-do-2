import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import allActions from "../actions";



const TaskItem = ({title,id,completed}) => {

  const [showInput,setShowInput] = useState(false);
  const [input,setInput] = useState(title);
  const dispatch = useDispatch();

  const inputOpen = () => setShowInput(!showInput);

  const formSubmit = event => {
    event.preventDefault();
    dispatch(allActions.Task.changeTitle(input,id));
  }

  const statusChange = () => dispatch(allActions.Task.changeSuccessStatus(id));
  const deleteTask = () => dispatch(allActions.Task.deleteTask(id));

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input onChange={statusChange} type="checkbox" checked={completed} className="form-check-input ml-0 mt-0" id="exampleCheck1" />
      {showInput ?
        <form onSubmit={formSubmit}>
          <input
            onBlur={inputOpen}
            type="text" value={input}
            onChange={e => setInput(e.target.value)}
            className="border-0 ml-4" minLength={5} required autoFocus/>
        </form>
        :
        <p className="mb-0 ml-4"  onDoubleClick={inputOpen}>{input}</p>
      }
      <span onClick={deleteTask}>&times;</span>
    </li>
  )
}

export default TaskItem;
