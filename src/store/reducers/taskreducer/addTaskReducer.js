import {
  ADD_TASK,
  DELETE_TASK,
  FILTER_TASK,
  CLEAR_FILTER_TASK,
  SET_CURRENT_TASK,
  UPDATE_TASK,
  CLEAR_CURRENT_TASK,
  CHANGE_STATUS_TASK,
} from "./../type";
const initialState = {
  taskList: [],
  filterList: null,
  currentTask: "",
  taskListDone: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskList: [...state.taskList, action.payload],
      };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter(
          (item) => item.task !== action.payload.task
        ),
      };
    case FILTER_TASK:
      return {
        ...state,
        filterList: state.taskList.filter((item) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return item.task.match(regex);
        }),
      };
    case CLEAR_FILTER_TASK:
      return {
        ...state,
        filterList: null,
      };
    case SET_CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
    case UPDATE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case CLEAR_CURRENT_TASK:
      return {
        ...state,
        currentTask: "",
      };
    case CHANGE_STATUS_TASK:
      return {
        ...state,
        taskListDone: [...state.taskListDone, action.payload],
        taskList: state.taskList.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
