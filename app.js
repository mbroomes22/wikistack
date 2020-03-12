const morgan = require("morgan");
const express = require("express");

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/'));
app.get('/', (req, res) => {
    res.send('hello world');
})
 
 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());
 

const PORT = 1337;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

 

