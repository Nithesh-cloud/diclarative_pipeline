const express= require("express");
const app=express();

app.get("/",(req, res)=>{

res.json([
    {
        id:1,
        name:"nithesh",
        age:32
    },
    {
        id:2,
        name:"dsouza",
        age:30
        
    },
    {
        id:3,
        name:"nithu",
        age:28
        
    },
    {
        id:4,
        name:"ajay",
        age:26
        
    },
])
});
app.listen(5000,()=>{
    console.log ("app is running on 5000 port")
})