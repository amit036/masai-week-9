const ADD_CAR = "ADD_CAR";
const iState = {
    Car:[]
}
const CarReducer=(state= iState,action)=>{
    switch (action.type) {
        case ADD_CAR:
          let temp = {
            carName: action.carName,
            carModel: action.carModel,
            carImgUrl: action.carImgUrl,
            carRent: action.carRent,
            carLocation: action.carLocation
          };
          return {
            orderList: [...state.Car, temp]
          };
    
        default:
          return state;
      }
    };
export default CarReducer;