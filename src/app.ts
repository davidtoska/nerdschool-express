import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import tvShowRouter from "./tvShow/tvShowRouter";
import userRouter from "./user/userRouter";


// Creating the main application
const app = express();

// Adding middelware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Routers
app.use("/tvshow", tvShowRouter);
app.use("/users", userRouter);


app.get("/", (req: express.Request, res: express.Response) => {
    res.send("add /tvshow to your url");
});

export default app;


// This syntax could be nice if when?
// app
//   .route("/usersroute")
//   .get((req, res) => { res.send("get all users") })
//   .post((req, res) => { res.send("users post") })
//   .put((req, res) => { res.send("users put"); })
//   .delete((req, res) => { res.send("users delete"); });
//
// Adding users Routers
// Endpoints
