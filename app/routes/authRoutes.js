const express = require('express')
const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = app => {

  app.post(
    '/api/login',
    function (req, res, next) {
      console.log('routes/user.js, login, req.body: ');
      console.log(req.body)
      next()
    },
    passport.authenticate('local'),
    (req, res) => {
      console.log('logged in', req.user);
      const userInfo = {
        username: req.user.username
      }
      res.send(userInfo)
  })

  app.get(
    '/', (req, res, next) => {
      console.log('===== user!!======')
      console.log(req.user)
    if (req.user) {
        res.json({ user: req.user })
    } else {
        res.json({ user: null })
    }
  })

  app.get(
    '/api/logout', (req, res) => {
    req.logout();
    res.redirect('/home');
  })

  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] }));

  app.get(
    '/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/blog');
    }
  );

  app.get(
    '/api/current_user', (req, res) => {
    res.send(req.user);
  });

//  app.get('/times', (req, res) => res.send(showTimes()));
};

// showTimes = () => {
//   let result = ''
//   const times = process.env.TIMES || 5
//   for (i = 0; i < times; i++) {
//     result += i + ' '
//   }
//   return result;
// }