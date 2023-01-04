const express = require('express');
const app = express();
 const path=require('path');
 const staticPath=path.join(__dirname ,"../public");
app.use(express.static('public'));
console.log(staticPath);
app.get('/', (req, res) => {
    res.send('hello');
  });

const port = 3002;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
