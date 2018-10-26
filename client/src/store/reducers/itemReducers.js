const initState={
    items:[],
    loading:false
}
const itemReducers=(state=initState,action)=>{
    switch (action.type) {
        case 'GET_ITEMS':
            return {
                ...state,
                items:action.data,
                loading:false
            }
        case 'ADD_ITEM':
            return{
                items:[action.data,...state.items]
            }
            

        case 'DELETE_ITEM':
            
        let newPost=state.items.filter(item=>action.id!==item._id);
            return{
                ...state,
                items:newPost
            }

        case 'ITEMS_LOADING':
            return{
                ...state,
                loading:true
            }

    
        default:return state;
    }
}

export default itemReducers;