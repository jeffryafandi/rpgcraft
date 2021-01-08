const Discord = require('discord.js');
 const config = require("./config.json")
const { ShardingManager } = require('discord.js');
const manager = new ShardingManager('./app.js', { 
  totalShards: 1,
  timeout: 999999,
  token: config.ENV.TOKEN });

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));
manager.spawn()
console.log(`Looking ${manager.totalShards} Shards`);
//Buat express
const http = require("http");
const ejs = require('ejs')
const express = require("express");
const app = express();
const path = require("path");
var bodyParser = require("body-parser");
global.ping = __dirname;

app.set("views", path.join(__dirname, "/web"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use('/public', express.static('public'));
app.use(express.static(__dirname + '/public'));
// Website Maping__________________________
app.get("/p200ok", function(req, res) { 
  res.sendStatus(200);
  console.log("Pinging...")
});
// Begin

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
//   but else
  res.redirect("/auth/discord");
};

const session = require("express-session");
const passport = require("passport");
const { Strategy } = require("passport-discord");

const clientID = "750134763649630228",
      clientSecret = "R1AX8YbUGUlHX__ypPtsD-CjQYHRp0iq",
      callbackURL = `https://minecraftrpg.glitch.me/auth/discord/callback`;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(new Strategy({
  clientID,
  clientSecret,
  callbackURL
}, function(accessToken, refreshToken, profile, done) {
  process.nextTick(function() {
    done(null, profile);
  })
}));

app.use(session({
  secret: "tololtololltolol",
  saveUninitialized: true,
  resave: true
}));

app.get("/login", checkAuth);

app.use(passport.initialize());
app.use(passport.session());

app.get("/auth/discord", passport.authenticate("discord", {
  scope: ["identify", "email", "guilds"]
}));

app.get("/logout", checkAuth, (req,res) => {
 req.logout();
 res.redirect("/");
});
app.get("/auth/discord/callback", passport.authenticate("discord", {
  failureRedirect: "/login"
}), (req, res) => {
  res.redirect("/");
});

app.get("/", (req, res) => {
  res.json(req.user ? req.user : { "empty": "login first!" });
});

const listener = app.listen(process.env.PORT, () => {
  console.log(`Listening to ${listener.address().port}`);
});