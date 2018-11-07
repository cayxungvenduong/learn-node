const express=require('express');
const app=express();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

app.get('/me',(req,res)=>{
res.status(200).json({success:'GET Thanh cong!'});
});



app.listen(8081,()=>{
console.log('Server running at http://localhost:8081');
})