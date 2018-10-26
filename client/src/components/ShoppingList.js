import React,{Component} from 'react';
import AddItem from './AddItem';
import {connect} from 'react-redux';
import {getItemsAction,removeItemAction,addItemAction,itemsLoading} from '../store/actions/itemActions/itemActions';
import axios from 'axios';


class ShoppingList extends Component{

    componentDidMount() {
        this.props.getItem();
    }
    

   removeItem=(id)=>{
        this.props.deleteItem(id);
        
    }
   addItem=(data)=>{
        this.props.addNewItem(data);
        

    }
    render(){    
        const {items}=this.props;
        const itemList=items.length? 
        (items.map((item)=>{
            return(
                <div className="card" key={item._id}>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item" >
                    <button onClick={()=>this.removeItem(item._id)} className='btn btn-danger removeBtn mr-2'>
                    X
                    </button>
                    {item.name}
                        
                    </li>
                </ul>
                </div>
            )
        }))
        :
        (
        <div className='card'>
            <div className='card-body text-center text-danger'>Nothing to show</div>
        </div>
        )
        return(
            <div className='container shopping-item'>
                <AddItem addItem={this.addItem}/>
                {itemList}
            </div>
        )
    }

}

        const mapStateToProps=(state)=>{
            return{
                items:state.item.items
            }
        }
        const mapDispatchToProps=(dispatch)=>{
        return{
                getItem:()=>{
                    dispatch(itemsLoading());
                    axios
                        .get('/api/items')
                        .then(res=>dispatch(getItemsAction(res.data)))
                },
                addNewItem:(data)=>{
                    axios
                        .post('/api/items',data)
                        .then(res=>dispatch(addItemAction(res.data)))
                    
                },
                deleteItem:(id)=>{
                    axios
                        .delete(`/api/items/${id}`)
                        .then(()=>dispatch(removeItemAction(id)));
                  },
                
        } 
        
        }


export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList);