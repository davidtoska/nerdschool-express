import TvShow, { Genre } from "./TvShow";

class TvShowService {
  tvShows: TvShow[];

  constructor() {
    this.tvShows = new Array();
    this.tvShows.push(new TvShow("1", "black magic", Genre.Porn));
    this.tvShows.push(new TvShow("2", "fake news", Genre.News));
    this.tvShows.push(new TvShow("3", "Julegudstjeneste", Genre.Propaganda));
    this.tvShows.push(new TvShow("4", "Derreck", Genre.News));
    this.tvShows.push(new TvShow("5", "Shawshank redemtion", Genre.Crime));
    this.tvShows.push(new TvShow("6", "I need it now", Genre.Porn));
  }

  getAll(): TvShow[] {
    return this.tvShows;
  }

  getShowById(id: string): TvShow {
    return this.tvShows[0];
  }
}

export default new TvShowService();
