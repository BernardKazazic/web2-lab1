import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Competition } from "../entity/competition";
import { Competitor } from "../entity/competitor";
import { Round } from "../entity/round";
import { Match } from "../entity/match";

dotenv.config();

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: 5432,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities: [Competition, Competitor, Round, Match],
    subscribers: [],
    migrations: [],
})