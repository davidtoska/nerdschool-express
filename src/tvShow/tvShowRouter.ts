import TvShow, { Genre } from "./TvShow";
import * as express from "express";
import { Request, Response } from "express";
import TvShowService from "./TvShowService";



const tvShowRouter: express.Router = express.Router();

/**
 * Retrieve all tv-shows
 */
tvShowRouter.get("/", (req: Request, res: Response) => {
  res.json(TvShowService.getAll());
});

/**
 * Create a new tvshow
 */
tvShowRouter.post("/", (req: Request, res: Response) => {
  let id: number = req.body.id;
  let name: string = req.body.name;
  let genre: Genre = req.body.genre;
  let newShow = TvShowService.createTvShow(id.toString(), name, genre);
  res.send(newShow);
});

/**
 * Get tvShow by id.
 */
tvShowRouter.get("/:id", (req: Request, res: Response) => {
  let id: string = req.params.id;
  let result: TvShow = TvShowService.getShowById(id);
  res.json(result);
});

/**
 * Delete tvShow by id
 */
tvShowRouter.delete("/:id", (req: Request, res: Response) => {
  res.json(TvShowService.deleteTvShowById(req.params.id));
});

/**
 * Update tvshow by id
 */
tvShowRouter.put("/:id", (req: Request, res: Response) => {
  let id = req.params.id;
  let name = req.body.name;
  let genre = req.body.genre;
  let updatedShow = new TvShow(id, name, genre);
  let result: TvShow = TvShowService.updateTvShowById(id, updatedShow);
  res.send(result);
});


export default tvShowRouter;