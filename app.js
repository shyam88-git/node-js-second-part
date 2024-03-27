let express=require('express');
let app=express();//you will get the access to the method.
 let dotEnv=require('dotenv');
  dotEnv.config();
// let port =process.env.PORT ||6300;
let port =6200;

let CategoryRouter=require('./src/controller/CategoryRouter');
let ProductRouter=require('./src/controller/ProductRouter');

app.get('/',(req,res)=>{

  res.send("Hello iam from express");
})

app.use('/category',CategoryRouter);

app.use('/product',ProductRouter);

// app.listen(port,(err)=>{

//   if(err) throw err;
//   else{

//     console.log("server started at the port ",port);
//   }
// })

app.listen(port,(err)=>{
    if(err)throw err;
    else{
        console.log("server is started on port ",port);
    }
})