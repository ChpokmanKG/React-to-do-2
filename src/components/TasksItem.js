import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import allActions from "../actions";
import {getTodayDate} from '../services/functions';

const Form = ({formSubmit,input,setInput,close}) => {

  useEffect(() => {
    const closeFunc = (e) => {
      e.preventDefault();
      close()
    }
    document.addEventListener('click',closeFunc,{capture: false});
    return () => document.removeEventListener('click',closeFunc,{capture: false});
  },[close]);

  const handleClick = e => {
    e.persist();
    e.nativeEvent.stopImmediatePropagation();
    e.stopPropagation();
  }

  return (
    <div onClick={handleClick}>
    <form onSubmit={formSubmit} className="ml-4">
          <textarea
            value={input.title}
            onChange={e => setInput({...input,title: e.target.value})}
            className="border-0 w-100" minLength={5} required/>

      <input type='date'
             value={input.leftDate ? input.leftDate : getTodayDate()}
             onChange={e => setInput({...input,leftDate: e.target.value})}
             className="form-control" required/>

      <button className='btn btn-primary mt-2' type="submit">Сохранить</button>
    </form>
    </div>
  )
}

const TaskItem = ({title,id,completed,leftDate}) => {

  const [showInput,setShowInput] = useState(false);
  const [input,setInput] = useState({title,leftDate});
  const dispatch = useDispatch();

  const inputToggle = () => setShowInput(!showInput);

  const formSubmit = event => {
    event.preventDefault();
    dispatch(allActions.Task.changeTaskInfo(input,id));
    inputToggle();
  }

  const [deadlineText,setDeadlineText] = useState();

  useEffect(() => {
    const daysUntilTheDeadline = () => {
      if(leftDate) {
        const today = new Date();
        const deadline = new Date(leftDate);
        const one_day=1000*60*60*24;
        const result = Math.ceil((deadline.getTime() - today.getTime()) / (one_day));
        return result < 0 ?
          `Вы пропустили дедлайн ${result} дней/день назад` :
          `До делайна осталось ${Math.ceil((deadline.getTime() - today.getTime()) / (one_day))} дня/дней`
      }
      return 'Вы не заполнили время выполнения задачи'
    }
    setDeadlineText(daysUntilTheDeadline());
  },[leftDate]);

  const statusChange = () => dispatch(allActions.Task.changeSuccessStatus(id));
  const deleteTask = () => dispatch(allActions.Task.deleteTask(id));

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input onChange={statusChange} type="checkbox" checked={completed} className="form-check-input ml-0 mt-0" id="exampleCheck1" />
      {showInput ?
        <Form input={input} close={inputToggle} formSubmit={formSubmit} setInput={setInput}/>
        :
        <div className="ml-4">
          <p className="mb-0" onDoubleClick={inputToggle}>{input.title}</p>
          <small className="text-muted">{deadlineText}</small>
        </div>
      }
      <span onClick={deleteTask}>&times;</span>
    </li>
  )
}

export default TaskItem;
