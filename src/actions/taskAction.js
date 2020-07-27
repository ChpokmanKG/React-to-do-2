export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TASK_INFO = 'CHANGE_TASK_INFO';
export const TOGGLE_COMPLETE = 'TOGGLE_COMPLETE';
export const DELETE_TASK = 'DELETE_TASK';
export const REQUEST_POSTS_START = 'REQUEST_POSTS_START';
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS';
export const REQUEST_POSTS_FAILED = 'REQUEST_POSTS_FAILED';
export const REQUEST_STATUS_CHANGE = 'REQUEST_STATUS_CHANGE';

const addTask = (taskText) => ({
  type: ADD_TASK,
  payload: taskText
})

const changeTaskInfo = (taskText,id) => ({
  type: CHANGE_TASK_INFO,
  payload: taskText,
  taskId: id
})

const changeSuccessStatus = (id) => ({
  type: TOGGLE_COMPLETE,
  taskId: id
})

const deleteTask = id => ({
  type: DELETE_TASK,
  taskId: id,
})

const requestPostsStart = () => ({
  type: REQUEST_POSTS_START
})

const requestPostsSuccess = (data) => ({
  type: REQUEST_POSTS_SUCCESS,
  payload: data
})

const requestPostsFailed = () => ({
  type: REQUEST_POSTS_FAILED
})

const requestPostStatusChange = () => ({
  type: REQUEST_STATUS_CHANGE
})

export default {
  addTask,
  changeTaskInfo,
  changeSuccessStatus,
  deleteTask,
  requestPostsSuccess,
  requestPostsStart,
  requestPostsFailed,
  requestPostStatusChange
}
