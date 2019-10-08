const ADD_CAR = "ADD_CAR";

// create action creators and export
const addCar = item => {
  return {
    type: ADD_CAR,
    carName: item.carName,
    carModel: item.carModel,
    carImgUrl: item.carImgUrl,
    carRent: item.carRent,
    carLocation:item.carLocation
  };
};

export { addCar };