import express, { Request, Response } from "express";

const app = express();
app.get("/test", (req: Request, res: Response) => {
  res.send("RADI");
});

app.listen(4000, () => console.log("radi"));
