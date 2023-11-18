export const getAir=(getitems)=>{
    return{
        type:"GET_AIRLINE",
        payload:getitems,
    }
}

export const bookflight=(book)=>{
    return {
        type:"BOOK_FLIGHT",
        payload:book,
    }
}