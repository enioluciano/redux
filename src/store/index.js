import {createStore} from 'redux';

const Initial_State={
    addText: [
        'Texto'
    ]
}

function frames (state = Initial_State, action){
  //  let param = action.parametro;
    switch (action.type){
        case 'ADD_TEXT':
            return {...state, addText:[...state,action.data]};
        
            default:
                return state;
    }
}

const store = createStore(frames);

export default store;