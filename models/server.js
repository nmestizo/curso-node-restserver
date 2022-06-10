
const express = require('express');
const cors = require('cors');
const router = require('../routes/user');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT;
        this.userPath = '/api/users'; 
        this.middlewares();
        this.routes();
    }

    middlewares(){

        this.app.use(cors());

        this.app.use(express.json());

        this.app.use( express.static('public'));
    }

    routes(){
       
        this.app.use(this.userPath, router);
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Servidoir corriendo en el Puerto: ${this.port}`)
          })
    }
}

module.exports = Server;