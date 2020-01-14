import Initial from '../store/Initial'
import types from '../store/types'

function frames (state = Initial.Initial_State, action){
    switch (action.type){
        case types.ADDTEXT:
           // let text = uab([...state.data, ...action.data])
            return {
                ...state, 
                data: action.data}
        
            default:
                return state;
    }
} export default frames;