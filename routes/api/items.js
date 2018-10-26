const express=require('express');
const router=express.Router();

// following 2 lines due to the recent bugs of mongo
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

// Item model

const Item=require('../../models/items');

// get request from /api/items

router.get('/',(req,res)=>{
    Item.find()
    .sort({date:-1})
    .then(items=>res.json(items))

});

// get request for specific id

router.get('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then((item)=>{
        res.json(item)
    })
    .catch((error)=>{
        console.log(error);
    })
});

// post request to /api/items

router.post('/',(req,res)=>{
    new Item({
        name:req.body.name     
    })
    .save()
    .then(item=>res.json(item))
});

// edit request
router.put('/:id',(req,res)=>{
    Item.findOneAndUpdate(req.params.id,req.body)
    .then(()=>{
        Item.findById(req.params.id)
        .then((item)=>{
            res.status(200).json({
                details:item
            })
        })
    })
    .catch((error)=>{
        console.log(error);
    })
})

// delete request 


router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then((item)=>{
        item.remove()
        .then(()=>res.status(200).json({
            success:true,
            details:item
        }))
    })
    .catch(()=>{
        res.status(404)
        .json({
            success:false
        })
    })
});



module.exports=router;