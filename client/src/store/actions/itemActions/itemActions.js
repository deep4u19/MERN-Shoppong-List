export const getItemsAction=(data)=>{
    return {
        type:'GET_ITEMS',
        data
    }
}
export const removeItemAction=(id)=>{
    return {
        type:'DELETE_ITEM',
        id
    }
}
export const addItemAction=(data)=>{
    return {
        type:'ADD_ITEM',
        data
    }
}

export const itemsLoading=()=>{
    return{
        type:'ITEMS_LOADING'
    }
}