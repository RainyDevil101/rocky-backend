import express from 'express';
import cors from 'cors';
import http from 'http';
import { routes } from '../utils/routes.js';
import { client } from '../db/connection.js';


class Server {

  constructor() {
    this.app = express();
    this.port = process.env.PORTLH;
    this.server = http.createServer(this.app);

    this.dbConnection();

    this.middlewares();

    this.routes();
    this.listen();
  };

  async dbConnection() {
    try {
      await client.connect();
      console.log('Database connected!');
    } catch (error) {
      throw new Error(error);
    };
  };

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
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