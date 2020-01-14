import {createStore} from 'redux';

const Initial_State={
    frameworks: [
        'React',
        'Bootstrap',
        'CSS',
        'HTML'
    ]
}

function frames (state = Initial_State, action){
    switch (action.type){
        case 'ADD_FRAMES':
            return {...state, frameworks:[...state.frameworks, action.title]};
        
            default:
                return state;
    }
}

const store = createStore(frames);

export default store;