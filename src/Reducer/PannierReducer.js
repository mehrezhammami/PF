const PannierReducer = (state=[],action) => {
    if (action.type==="ADD"){
    return [...state,action.payload]
    }else{
        return state
    }
}
 
export default PannierReducer;