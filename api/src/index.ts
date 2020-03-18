import express, { Request, Response, Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import bluebird from "bluebird";
import cors from "cors";
import config from "./config";

import userRoutes from "./routes/userRoutes";
import orderRoutes from "./routes/orderRoutes";
import weeklyReceiptRoutes from "./routes/weeklyReceiptRoutes";
import menuItemRoutes from "./routes/menuItemRoutes";
import invoiceRoutes from "./routes/invoiceRoutes";
import loginRoutes from "./routes/loginRoutes";

// setup database
mongoose.Promise = bluebird;
mongoose.connect(config.databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
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
app.use("/users", userRoutes);
app.use("/receipt", weeklyReceiptRoutes);
app.use("/menuItems", menuItemRoutes);
app.use("/invoice", invoiceRoutes);
app.use("/login", loginRoutes);
app.use("/orders", orderRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
