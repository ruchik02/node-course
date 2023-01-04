const express = require('express');
const app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send("Hello");
    // console.log(res.getHeader('Content-Type'));
    // res.sendFile(__dirname + '/public/html/index.html');
  });
  // app.get('/home', (req, res) => {
  //   res.setHeader("Content-Type", "text/html"); 
  //   res.sendFile(__dirname + '/public/html/home.html')
  // });

  // app.get('/about', (req, res) => {
  //   res.setHeader("Content-Type", "text/html"); 
  //   res.sendFile(__dirname + '/public/html/about.html',)
  // });

  // app.get('/contact', (req, res) => {
  //     res.setHeader("Content-Type", "text/html"); 
  //   res.sendFile(__dirname + '/public/html/contact.html')
  // });



const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

