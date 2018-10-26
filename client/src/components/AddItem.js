import React,{Component} from 'react';
class AddItem extends Component{
    state={
        items:{
            name:'',
            err:false
        }
    }
    handleChange=(e)=>{        
        this.setState({
            items:{
                ...this.state.items,
                [e.target.id]:e.target.value,
                
            }
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.items.name){
            this.setState({
                items:{
                    name:'',
                    err:false
                }   
            })
            this.props.addItem(this.state.items);
    
        }else{
            this.setState({
                items:{
                    name:'',
                    err:true
                }   
            })
        }
    }
    render(){
        return(
            <div className='mb-2'>
        
        <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#exampleModal">
        Add Item
        </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Add Item</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button> 
                </div>
                {this.state.items.err === true &&
                    <h5 className='text-danger text-center'>Please enter item</h5>}
            <form className="" onSubmit={this.handleSubmit}>
                <div className="modal-body">
                        <div className="form-group">
                        <input value={this.state.items.name} onChange={this.handleChange} id='name' type="text" className="mr-2 form-control"  placeholder="Enter Item"/>
                        </div>
                </div>
                <div className="modal-footer">
                    <button type="submit" className="btn btn-secondary" >Add Item</button>
                </div>
            </form>
                </div>
            </div>
            </div>
            </div>
        )
    }
}

export default AddItem;






// <div className='mb-2'>
                // {this.state.items.err === true &&
                // <h3 className='text-danger text-center'>Please enter item</h3>}
        //     <form className="" onSubmit={this.handleSubmit}>
        //         <div className="form-group">
        //         <input value={this.state.items.name} onChange={this.handleChange} id='name' type="text" className="mr-2 form-control"  placeholder="Enter Item"/>
        //         </div>
        //         <button type="submit" className="btn btn-primary">Add Item</button>
        //     </form>
            
// </div>