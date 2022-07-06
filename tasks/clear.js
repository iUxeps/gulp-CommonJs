const del = require("del");

const path = require("../config/path.js");


const clear = () => {
    return del('./public')
}

module.exports = clear;

