var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');
var db = mongoose.connection;
  
passport.use(new GoogleStrategy({
    clientID:"YOUR-GOOGLE-ID-API", // Your Credentials here.
    clientSecret:"YOUR-SECRET", // Your Credentials here.
    callbackURL:"http://localhost:3000/google/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
 
passport.use(new FacebookStrategy(
  {
    clientID : "YOUR-FACEBOOK-ID-API",
    clientSecret : "YOUR-FACEBOOK-ID-API",
    callbackURL : "http://localhost:3000/facebook/callback",
    profileFields: ['id', 'emails', 'link', 'locale', 'name',
    'timezone', 'updated_time', 'verified', 'displayName']
  },
    
  async function (accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
 
passport.serializeUser((user , done) => {
  done(null , user);
})
passport.deserializeUser(function(user, done) {
  done(null, user);
});
