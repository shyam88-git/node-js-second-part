
let express=require('express');

const CategoryRouter=express.Router();

const category=[
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing"
  ]

CategoryRouter.route('/').get((req,res)=>{

    res.send(category);
});


CategoryRouter.route('/details').get((req,res)=>{
    res.send('category details');
})


module.exports=CategoryRouter;