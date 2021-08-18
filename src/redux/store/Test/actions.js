import { ADD_REMINDER ,CLEAR_REMINDER ,DELETE_REMINDER ,UPDATE_REMINDER } from 'redux/store/actionsTypes'


export const addReminder = (value) => {
  
  return dispatch => {

    dispatch({type: ADD_REMINDER, payload: value})
  }
}
export const clearAllReminders = () => {
  

  return dispatch => {

    dispatch({type: CLEAR_REMINDER})
  }
}
export const deleteReminder = (data) => {


  return dispatch => {
    dispatch({type: DELETE_REMINDER, payload: data})
  }
}
export const updateReminder = (data) => {
  

  return dispatch => {
    dispatch({type: UPDATE_REMINDER, payload: data})
  }
}

