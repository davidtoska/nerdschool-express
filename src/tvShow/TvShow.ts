export enum Genre {
  Crime,
  Porn,
  Talkshow,
  Propaganda,
  News
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
}

export default TvShow;
