import React, {useEffect, useState} from "react";
import {useSelector,useDispatch} from 'react-redux';
import TaskItem from "../components/TasksItem";
import allActions from "../actions";
import Ad from "../components/Ad";




const Tasks = () => {

  const tasks = useSelector(store => store.tasks);
  const [showAd,setShowAd] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(allActions.Task.requestPostsStart());
  },[dispatch]);

  const toggle = () => setShowAd(!showAd);

  return (
    <div className={"container mt-3"}>
      <div className="row">
        <div className="col-md-12">

          {tasks.dataLoaded === 'fail' ? (
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>Произошла ошибка </strong>
              <span>Проверьте подключение к интернету</span>
              <button onClick={() => dispatch(allActions.Task.requestPostStatusChange())} className="close">
                <span>&times;</span>
              </button>
            </div>
          ) : null}

          <div className="w-100 bg-dark pb-3 pt-3 mb-3" onClick={toggle}>
            <p className="mb-0 text-center text-light">Реклама</p>
          </div>

          {tasks.tasks.length < 1 ? <p className="mb-0 h3 text-muted text-center">Тут пока ничего нет</p> : (
            <ul className="list-group mb-5 pb-5">
              {tasks.tasks.map((item,idx) => (
                <TaskItem {...item} key={item.title + idx} id={idx}/>
              ))}
            </ul>
          )}

        </div>
      </div>
      {showAd && <Ad close={toggle} showTime={10000}/>}
    </div>
  )
};

export default Tasks;
