export const initState = {
    lists : []
  }
const UserDataReducer = (state  = initState, action) => {
    console.log(state);
    console.log(action);
    switch(action.type) {
        case 'ADD_User':
            let list = { id: state.lists.length + 1 , name : action.payload.name, mnumber:action.payload.mnumber}
            state.lists.push(list);
            return {...state}
        case 'DELETE_User':
        default:
            return { ...state }
    }
  }
  export default UserDataReducer;