import express, { Express } from "express";
import dotenv from "dotenv";
import routes from "./src/routes";
import { SERVER_PORT } from "./src/configs/server.config";

dotenv.config();

const app: Express = express();

app.use(express.json())
app.use(routes)

app.listen(SERVER_PORT, () => {
	console.log(`⚡️[server]: Server is running at http://localhost:${SERVER_PORT}`);
});
