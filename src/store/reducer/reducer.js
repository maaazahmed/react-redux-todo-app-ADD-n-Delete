import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    todos:[]
}
export default (state=INITIAL_STATE,action)=>{    
    switch(action.type){
        
        case ActionTypes.GETTINGTODO:
        return({
            ...state,
            todos:action.payload
        })

        case ActionTypes.DELETEINGTODO:
        return({
            ...state,
            todos:action.payload
        })
        default :
        return state
    }
}