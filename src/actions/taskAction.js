export const ADD_TASK = 'ADD_TASK';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_SUCCESS_STATUS = 'CHANGE_SUCCESS_STATUS';
export const DELETE_TASK = 'DELETE_TASK';
export const REQUEST_POSTS_START = 'REQUEST_POSTS_START';
export const REQUEST_POSTS_SUCCESS = 'REQUEST_POSTS_SUCCESS';
export const REQUEST_POSTS_FAILED = 'REQUEST_POSTS_FAILED';
export const REQUEST_POST_STATUS_CHANGE = 'REQUEST_POST_STATUS_CHANGE';

const addTask = (taskText) => ({
  type: ADD_TASK,
  payload: taskText
})

const changeTitle = (taskText,id) => ({
  type: CHANGE_TITLE,
  payload: taskText,
  taskId: id
})

const changeSuccessStatus = (id) => ({
  type: CHANGE_SUCCESS_STATUS,
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
  type: REQUEST_POST_STATUS_CHANGE
})

export default {
  addTask,
  changeTitle,
  changeSuccessStatus,
  deleteTask,
  requestPostsSuccess,
  requestPostsStart,
  requestPostsFailed,
  requestPostStatusChange
}
