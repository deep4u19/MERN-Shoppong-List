const express =require('express');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const items=require('./routes/api/items');
const app=express();
const path=require('path');

app.use(bodyParser.json())
// MonGo Connection
const db=require('./config/keys').mongoURI;
mongoose
    .connect(db,{useNewUrlParser: true})
    .then(()=>console.log('Mongoose connected'))
    .catch(error=>console.log(error))

// Routes
app.use('/api/items',items);

// Static assets in production
if(process.env.NODE_ENV==='production'){
// set static folder
    app.use(express.static('client/build'));
    app.get('*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'client','build','index.html'));
    });
}
const port=process.env.PORT || 6000;

app.listen(port,()=>console.log(`Server running on port ${port}`));
