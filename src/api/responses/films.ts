import { BaseTableResponseDto } from "@/@types/baseInterface";

export type GetFilmReponseTypeResponseData = {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  characters: Array<string>;
  planets: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  species: Array<string>;
  created: Date;
  edited: Date;
  url: string;
};

export type GetFilmReponseTypeResponse = BaseTableResponseDto<GetFilmReponseTypeResponseData>;
