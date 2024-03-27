let express=require('express');
let app=express();//you will get the access to the method.
 let dotEnv=require('dotenv');

  dotEnv.config();
// let port =process.env.PORT ||6300;

let port =6200;


//default routes

app.get('/',(req,res)=>{

    res.send("Hello world!");
})

app.get('/test',(req,res)=>{

    res.send("test route!");
})

app.listen(port,(err)=>{

    if(err)throw err;
    else{

        console.log("server is started on port ",port);
    }
})