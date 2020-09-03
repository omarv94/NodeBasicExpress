const express = require('express');
const server =express();
const {PORT} = require("../config");
const {HomeRoutes} = require('../routes');
const { HomeController } = require('../controllers');

server.use(express.static('../public'));
server.use(express.json());

server.use("/",HomeRoutes);

server.listen(PORT, () =>{
    console.log(`Aplication running on PORT ${PORT}`);
});

