require('dotenv').config()
const { engine } = require('express-handlebars')
const express = require('express')
const app = express()
const PORT = 3000;

//json
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

// serve static files
app.use("/static", express.static(__dirname + "/client/public"))

// routes
app.use(require('./server/routes/views'))

//sendgrid
app.use("/send", require("./server/services/sendgrid"))

// scraper
//sendgrid
app.use("/send", require("./server/services/scraper"))

// handlebars engine, set partials directory
app.engine(
    "handlebars",
    engine({
      partialsDir: __dirname + "/client/views/partials/",
    })
  );

// set view engine & directory
app.set("view engine", "handlebars");
app.set("views", __dirname + "/client/views");

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running, and App is listening on port " + PORT
    );
  else console.log("Error occurred, server can't start", error);
});
