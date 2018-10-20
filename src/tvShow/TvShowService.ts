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

  /**
   * Return all tvshows 
   */
  getAll(): TvShow[] {
    return this.tvShows;
  }

  /**
   * Return tvshow by id
   * @param id Id of tvshow
   */
  getShowById(id: string): TvShow {
    let result = this.tvShows.find(tvshow => tvshow.id === id)
    return result;
  }

  /**
   * Update the tvshow with new data
   * @param id 
   * @param updatedShow 
   */
  updateTvShowById(id: string, updatedShow: TvShow): TvShow {
    let thisShow = this.getShowById(id);
    let thisShowUpdated = thisShow.update(updatedShow)
    return thisShowUpdated;
  }

  /**
   * Create a new tvshow
   * @param id 
   * @param name 
   * @param genre 
   */
  createTvShow(id: string, name: string, genre: Genre): TvShow {
    let result = new TvShow(id, name, genre);
    this.tvShows.push(result);
    return result;
  }

  deleteTvShowById(id: string): TvShow[] {
    let instance = this.getShowById(id);
    this.tvShows = this.tvShows.filter(tvShow => tvShow.id !== id);

    return this.tvShows;
  }
}

export default new TvShowService();
