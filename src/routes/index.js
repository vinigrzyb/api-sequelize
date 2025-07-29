const express = require('express');

const users = require('./usersRoute.js');

module.exports = app => {
    app.use(
        express.json(),
        users
    )
}