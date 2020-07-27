import {
  ADD_TASK,
  CHANGE_TASK_INFO,
  TOGGLE_COMPLETE,
  DELETE_TASK,
  REQUEST_POSTS_SUCCESS,
  REQUEST_POSTS_FAILED,
  REQUEST_STATUS_CHANGE
} from "../actions/taskAction";

const initialState = {
  tasks: [{
    title: 'Нажми на текст два раза',
    leftDate: '',
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
          title: action.payload.title,
            leftDate: action.payload.date,
          completed: false,
        }],
      }

    case CHANGE_TASK_INFO:
      state.tasks[action.taskId].title = action.payload.title;
      state.tasks[action.taskId].leftDate = action.payload.leftDate;
      return {
        ...state
      }

    case TOGGLE_COMPLETE:
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
      const _remove = state.tasks.map(item => item.id);
      const filtered = action.payload.filter(item => !_remove.includes(item.id));
      return {
        ...state,
        tasks: [...state.tasks,...filtered]
      }

    case REQUEST_POSTS_FAILED:
      return {
        ...state,
        dataLoaded: 'fail'
      }

    case REQUEST_STATUS_CHANGE:
      return {
        ...state,
        dataLoaded: 'no yet'
      }
    default:
      return state
  }
}

export default taskReducer;
