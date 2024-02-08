import { BaseTableResponseDto } from "@/@types/baseInterface";

export type GetPeopleResponseData = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: string[];
  vehicles: Array<string>;
  starships: Array<string>;
  created: Date;
  edited: Date;
  url: string;
};

export type GetPeopleResponse = BaseTableResponseDto<GetPeopleResponseData>;
