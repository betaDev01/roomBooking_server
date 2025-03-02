import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';

import { SERVER_PORT } from './configs/env.config.js';
import { CustomErrorHandler } from './middlewares/customErrorHandler.js';
import { RoomBookingController } from './controller/roomBookingController.js';
import { UserController } from './controller/userController.js';
import { AuthorizationHandler } from './middlewares/authenticationMiddleware.js';

export class App {
  public app: express.Application;
  public port: string | number;
  constructor() {
    this.port = SERVER_PORT || 4000;

    this.app = express();
    this.initializeMiddlewares();

    // Public Route
    useExpressServer(this.app, {
      controllers: [UserController],
      middlewares: [CustomErrorHandler],
      cors: true,
      defaults: {
        nullResultCode: 404,
        undefinedResultCode: 204,
      },
    });

    // Private Route
    useExpressServer(this.app, {
      controllers: [RoomBookingController],
      middlewares: [AuthorizationHandler, CustomErrorHandler],
      cors: true,
      defaults: {
        nullResultCode: 404,
        undefinedResultCode: 204,
      },
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.info(`Server Running on port : ${this.port}`);
    });
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}
