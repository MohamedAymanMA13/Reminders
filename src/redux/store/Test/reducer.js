import { ADD_REMINDER ,CLEAR_REMINDER, DELETE_REMINDER ,UPDATE_REMINDER } from 'redux/store/actionsTypes'
const reminders=JSON.parse(localStorage.getItem("reminders"))?[...JSON.parse(localStorage.getItem("reminders")) ]:[]

const initialState = {
  reminderInfo:reminders,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_REMINDER:
      return {
        ...state,
       reminderInfo: [...state.reminderInfo,action.payload],
      }
      case DELETE_REMINDER:
        return {
          ...state,
         reminderInfo: action.payload,
        }
      case UPDATE_REMINDER:
        return {
          ...state,
          reminderInfo: action.payload,
        }
      case CLEAR_REMINDER:
        return {
          ...state,
         reminderInfo: [],
        }
    default:
      return { ...state }
  }

}

export default reducer
