import express from 'express';
import cors from 'cors';
import http from 'http';
import { routes } from '../utils/routes.js';



class Server {

  constructor() {
    this.app = express();
    this.port = 8080;
    this.server = http.createServer(this.app);

    this.middlewares();

    this.routes();
    this.listen();
  };

  middlewares() {
    this.app.use(cors());
  };

  routes() {
    routes.forEach(({ prefix, route }) => {
      this.app.use(prefix, route)
    });
  };

  listen() {
    this.app.listen(this.port, () => {
      console.log('Server listening on port', this.port);
    });
  };

};


export default Server;