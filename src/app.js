const express = require('express');
const server =express();
const {PORT} = require("../config");
const {HomeRoutes} = require('../routes');
const { HomeController } = require('../controllers');
const { NotFoundMiddleware } = require('../middlewares');

server.use(express.static('../public'));
server.use(express.json());

server.use("/",HomeRoutes);
server.use(NotFoundMiddleware);

server.listen(PORT, () =>{
    console.log(`Aplication running on PORT ${PORT}`);
});

