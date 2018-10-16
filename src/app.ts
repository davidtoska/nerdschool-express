import * as express from "express";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import { getTvShows, getTvShowById } from "./tvShow/tvShowRouter";

// Creating the main application
const app = express();

// Adding middelware
app.use(morgan("dev"));
app.use(bodyParser.json());

// Get all tv shows: GET http://localhost:3000/tvshow/
// Get single tv show: GET http://localhost:3000/tvshow/{id}/
// Insert a tv show: POST http://localhost:3000/tvshow/ (The tv show data we will insert is in the request's body)
// Delete a tv show: DELETE http://localhost:3000/tvshow/{id}/
// Update a tv show: PUT http://localhost:3000/tvshow/{id}/ (The tv show data we will insert is in the request's body)

// Endpoints
app.get("/", (req: express.Request, res: express.Response) => {
  res.send("Root of project");
});
app.get("/tvshow", getTvShows);
app.get("/tvshow/:id", getTvShowById);
app.post("/tvshow", getTvShows);
app.delete("/tvshow", getTvShows);
app.put("/tvshow/:id", getTvShows);

export default app;
