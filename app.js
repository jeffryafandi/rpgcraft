 const McClient = require ("./src/structures/McClient")
const client = new McClient({
  disableMentions: "everyone"
})
require ('./src/structures/events')(client)
//Web Maping
/*const http = require("http");
const ejs = require('ejs')
const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");

app.set("views", path.join(__dirname, "/web"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/public'));
// Website Maping____________________________
app.get("/*", function(req, res) {
  res.sendStatus(200);
 console.log("Pinging...")
});
app.listen(process.env.PORT);*/

client.login(client.config.ENV.TOKEN)
