import { create } from "domain";

export enum Genre {
  Crime = "crime",
  Porn = "port",
  Talkshow = "talkshow",
  Propaganda = "propaganda",
  News = "news"
}

class TvShow {
  id: string;
  name: string;
  genre: Genre;

  constructor(id: string, name: string, genre: Genre) {
    this.id = id;
    this.name = name;
    this.genre = genre;
  }

  update(tvshow: TvShow) {
    const copy = { ...tvshow };
    this.name = copy.name;
    this.genre = copy.genre;
    return tvshow;
  }

}

export default TvShow;
