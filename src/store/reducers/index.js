import { combineReducers } from 'redux'
import CodeReducer from './codeReducer'

const rootReducer = combineReducers({
    CodeReducer: CodeReducer
})

export default rootReducer