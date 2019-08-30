

import { createStore } from 'redux'
import UserDataReducer from '../reducers/UserDataReducer';


export const store = createStore(UserDataReducer)