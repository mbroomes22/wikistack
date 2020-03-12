const morgan = require("morgan");
const express = require("express");
// const html = require("html-template-tag")
const layout = require("./views/layout");

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.send(layout(' '));
})
 
 app.use(express.urlencoded({ extended: false }));
 app.use(express.json());

 app.get("/posts/:id", async (req, res, next) => {
    try {
    //   const data = await client.query(baseQuery + "WHERE posts.id = $1", [req.params.id]);
    //   const post = data.rows[0];
      res.send(layout(content));
    } catch (error) { next(error) }
  });

 

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`);
  });

 

