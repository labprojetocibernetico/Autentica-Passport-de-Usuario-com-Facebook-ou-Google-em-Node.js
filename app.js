var express = require('express');
var app = express();
var path = require('path');
var passport = require('passport');
var config = require('./config/database.js');
require("./config/passport");
var cookieSession = require('cookie-session');


//Connect MongoDB
mongoose.connect(config.database);
var db = mongoose.connection;
db.on('error', console.error.bind(console,"Erro de conexão com MongoDB"));
db.once('open', function(){
    console.log("Conectado no MongoDB");
})

app.use(cookieSession({
    name: 'auth-session',
    keys: ['key1', 'key2']
}));

//App Init
app.use(express.json());
app.use(passport.initialize());

//Set Public Folder
app.use(express.static(path.join(__dirname,'public')));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

//Google Auth 
app.get('/google' , passport.authenticate('google', { scope:
    [ 'email', 'profile' ]
}));
  
//Google Auth Callback
app.get( '/google/callback',
    passport.authenticate( 'google', {
        successRedirect: '/auth/callback/success',
        failureRedirect: '/auth/callback/failure'
}));

app.get('/facebook', passport.authenticate('facebook' , { scope : ['email'] } ) );

app.get("/facebook/callback",passport.authenticate("facebook", {
    successRedirect: '/auth/callback/success',
    failureRedirect: '/auth/callback/failure',
    session : false 
}));


//Success 
app.get('/auth/callback/success' , (req , res) => {
    res.send("Sucesso");
});
  
//Failure
app.get('/auth/callback/failure' , (req , res) => {
    res.send("Error");
})

var port = 3000;
app.listen(port, function(){
    console.log("Server ouvindo na porta: "+port);
});
