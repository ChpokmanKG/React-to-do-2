import {
  ADD_TASK,
  CHANGE_TITLE,
  CHANGE_SUCCESS_STATUS,
  DELETE_TASK,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  REQUEST_POST_STATUS_CHANGE
} from "../actions/taskAction";

const initialState = {
  tasks: [{
    title: 'Нажми на текст два раза',
    completed: false
  }],
  dataLoaded: 'no yet' // no yet | fail
}

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          title: action.payload,
          completed: false,
        }],
      }

    case CHANGE_TITLE:
      state.tasks[action.taskId].title = action.payload;
      return {
        ...state
      }

    case CHANGE_SUCCESS_STATUS:
      state.tasks[action.taskId].completed = !state.tasks[action.taskId].completed;
      return {
        ...state
      }

    case DELETE_TASK:
      state.tasks.splice(action.taskId, 1);
      return {
        ...state
      }

    case REQUEST_POSTS_SUCCESS:
      return {
        ...state,
        tasks: [...state.tasks,...action.payload]
      }

    case REQUEST_POSTS_FAILED:
      return {
        ...state,
        dataLoaded: 'fail'
      }

    case REQUEST_POST_STATUS_CHANGE:
      return {
        ...state,
        dataLoaded: 'no yet'
      }
    default:
      return state
  }
}

export default taskReducer;
