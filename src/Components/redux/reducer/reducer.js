const intialstate ={
    getflight:[],
    bookuserdata:[]
};

export const airreducer =(state=intialstate,action)=>{
    switch(action.type){

    case "GET_AIRLINE" :
        return {
            ...state,
            getflight:[action.payload]
        }

        case "BOOK_FLIGHT":
            return{
                ...state,
                bookuserdata:[action.payload]

            }

        default:
      return state
    }
}