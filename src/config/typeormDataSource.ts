import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { DataSource } from "typeorm";
import * as dotenv from 'dotenv';
import User from "src/model/user.entity";
dotenv.config();

export const config: PostgresConnectionOptions = {
    type: "postgres",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.USERNAME,
    password: String(process.env.PASSWORD),
    database: process.env.DATABASE,
    migrations: [__dirname + '/migrations/**/*{.ts, .js}'],
    entities: [User]
}

export default new DataSource(config);