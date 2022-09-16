import { createStore } from "redux"
function Redux (){

//state
const intialState ={
    numOfLaptops: 100
}


//action
const buyLaptop =()=>{
    return{
        type:"BUY_LAPTOP"
    }
}


const reducer =(state=intialState,action)=>{
    //   if(action.type==="BUY_LAPTOP"){
    //       return{numOfLaptops:state.numOfLaptops-1}
    //   }else{
    //     return state;
    //   }
    switch(action.type){
         case "BUY_LAPTOP":
            return{numOfLaptops:state.numOfLaptops-1}
            default:
                return state;
    }
}

const store = createStore(reducer);
console.log (store);
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(buyLaptop())


return(
<>

</>
)
}
export default Redux;