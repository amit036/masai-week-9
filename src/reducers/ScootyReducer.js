const ScootyReducer=(state='',action)=>{
    if(action.type==='SHOW_SCOOTY'){
        return action.payload
    }
    console.log(action)
    return state;
}
export default ScootyReducer;