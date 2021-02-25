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

export const addTask = (taskItem) => (dispatch) => {
  dispatch({
    type: ADD_TASK,
    payload: taskItem,
  });
};

export const deleteTask = (taskItem) => (dispatch) => {
  dispatch({
    type: DELETE_TASK,
    payload: taskItem,
  });
};

export const filterTask = (searchItem) => (dispatch) => {
  dispatch({
    type: FILTER_TASK,
    payload: searchItem,
  });
};

export const clearFilterTask = () => (dispatch) => {
  dispatch({
    type: CLEAR_FILTER_TASK,
  });
};

export const setCurrentTask = (currentTask) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_TASK,
    payload: currentTask,
  });
};

export const updateTask = (updateTask) => (dispatch) => {
  dispatch({
    type: UPDATE_TASK,
    payload: updateTask,
  });
};

export const clearCurrentTask = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT_TASK,
  });
};

export const changeStatusTask =(taskStatus)=> (dispatch) =>{
  dispatch({
      type:CHANGE_STATUS_TASK,
      payload:taskStatus
  })
}
