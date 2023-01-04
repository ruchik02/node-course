const express = require('express');
const app = express();
const path=require('path');
const staticPath=path.join(__dirname,"../public/");
app.get('/', (req, res) => {
  res.render('home');
});
app.get("/home", (req,res)=>{
    res.send("Home");
})
app.use(express.static(staticPath));
app.use(express.static('public'))
const port = 3005;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});