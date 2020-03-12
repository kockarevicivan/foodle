import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bluebird from "bluebird";
import cors from "cors";
import config from "./config";

import userRoutes from "./routes/userRoutes";

// setup database
mongoose.Promise = bluebird;
mongoose.connect(config.databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});
mongoose.connection.on("open", () => console.log("connected to the database"));
mongoose.connection.on("error", () =>
  console.log("error. Not connected to the database")
);

const app: Application = express();

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// routes
//users
app.use("/users", userRoutes);

app.listen(config.port, () =>
  console.log(`Server running on port ${config.port}`)
);
