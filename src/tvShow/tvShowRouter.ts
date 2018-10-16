import TvShow, { Genre } from "./TvShow";
import { Request, Response } from "express";
import TvShowService from "./TvShowService";

export let getTvShows = (req: Request, res: Response) => {
  res.json(TvShowService.getAll());
};

export let getTvShowById = (req: Request, res: Response) => {
  let tvshow = new TvShow("1", "DAvid", Genre.Porn);
  res.json(tvshow);
};

export let insertTvShow = (req: Request, res: Response) => {
  res.send("getTvShowById");
};

export let deleteTvShowById = (req: Request, res: Response) => {
  res.send("getTvShowById");
};

export let updateTvShowById = (req: Request, res: Response) => {
  res.send("getTvShowById");
};
