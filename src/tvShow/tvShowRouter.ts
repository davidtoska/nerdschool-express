import TvShow, { Genre } from "./TvShow";
import { Request, Response } from "express";
import TvShowService from "./TvShowService";

export let getTvShows = (req: Request, res: Response) => {
  res.json(TvShowService.getAll());
};

export let getTvShowById = (req: Request, res: Response) => {
  let id: string = req.params.id;
  let result: TvShow = TvShowService.getShowById(id);
  res.json(result);
};

export let insertTvShow = (req: Request, res: Response) => {
  //req.params
  let id = req.params.id;
  let name = req.params.id;
  let genre = req.params.genre;
  console.log(genre, id, name);
  res.send("getTvShowById");
};

export let deleteTvShowById = (req: Request, res: Response) => {
  res.json(TvShowService.deleteTvShow(req.params.id));
};

export let updateTvShowById = (req: Request, res: Response) => {
  res.send("tvshow updated");
};
