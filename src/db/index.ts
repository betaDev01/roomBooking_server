import pkg from 'pg';
import { DATABASE_PASSWORD, DATABASE_DB_NAME, DATABASE_PORT, DATABASE_URL, DATABASE_USER } from '../configs/env.config.js';

export abstract class ConnectDB {

  private static instance: null | pkg.Client = null;

  public static getDBInstance() {
    if (!this.instance) {
      const { Client } = pkg;

      const dbPort = DATABASE_PORT || 5432;
      const client = new Client({
        user: DATABASE_USER,
        host: DATABASE_URL,
        database: DATABASE_DB_NAME,
        password: DATABASE_PASSWORD,
        port: Number(dbPort)
      });
      client.connect();
      
      this.instance = client;
    }
    return this.instance;
  }
}