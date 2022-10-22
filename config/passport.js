var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/user');
var mongoose = require('mongoose');
var db = mongoose.connection;

  
passport.use(new GoogleStrategy({
    clientID:"38285515640-p1o05lrb5jk4970b5q9j1hdriccsv4ga.apps.googleusercontent.com", // Your Credentials here.
    clientSecret:"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", // Your Credentials here.
    callbackURL:"http://localhost:3000/google/callback",
    passReqToCallback:true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }
));
 
passport.use(new FacebookStrategy(
  {
    clientID : "1133022640672716",
    clientSecret : "3c43db76a5dd5412530336deff006bc6",
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