const iState={
    Bike:[
        {
            name:"TVS Apache",
            imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
            rent:"₹15/Km"
        },
        {
            name:"Bajaj Pulsar NS200",
            imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
            rent:"₹15/Km"
        },
        {
            name:"Yamaha YZF",
            imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
            rent:"₹15/Km"
        },
        {
            name:"TVS Apache",
            imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
            rent:"₹15/Km"
        },
        {
            name:"Bajaj Pulsar NS200",
            imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
            rent:"₹15/Km"
        },
        {
            name:"Yamaha YZF",
            imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
            rent:"₹15/Km"
        },{
            name:"TVS Apache",
            imgUrl:"https://auto.ndtvimg.com/bike-images/colors/tvs/apache-rtr-200-4v/tvs-apache-rtr-200-4v-black.png?v=1",
            rent:"₹15/Km"
        },
        {
            name:"Bajaj Pulsar NS200",
            imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
            rent:"₹15/Km"
        },
        {
            name:"Yamaha YZF",
            imgUrl:"https://imgd.aeplcdn.com/1280x720/bw/ec/36469/Yamaha-YZF-R3-Action-138042.jpg?wm=0",
            rent:"₹15/Km"
        },
        {
            name:"Bajaj Pulsar NS200",
            imgUrl:"https://auto.ndtvimg.com/bike-images/colors/bajaj/pulsar-200-ns/bajaj-pulsar-200-ns-wild-red.png?v=26",
            rent:"₹15/Km"
        }
    ]
}

const BikeReducer=(state=iState,action)=>{
    if(action.type==='SHOW_BIKE'){
        return action.payload
    }
    console.log(action)
    return state;
}
export default BikeReducer;