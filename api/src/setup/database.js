import mysql from "mysql2";
import databaseConfig from "../config/database";

const Connection = mysql.createConnection({
	host: databaseConfig.development.host,
	port: databaseConfig.development.port,
	user: databaseConfig.development.username,
	password: databaseConfig.development.password,
	database: databaseConfig.development.database
});
//Connecting to database
Connection.connect(err => {
	if (err) {
		console.error("error connecting: " + err.stack);
		return;
	}

	console.log("connected as id " + Connection.threadId);
});
export default Connection;
