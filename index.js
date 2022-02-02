const express = require('express');

const PORT = 5000;
const app =express();

app.get('/',(req,res )=>{
    res.json({ message: "Hello World" });
})
app.listen(PORT,()=>{
    console.log(`server is runing on http://localhost:${PORT}`);
})