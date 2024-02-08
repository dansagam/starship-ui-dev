import { BaseTableResponseDto } from "@/@types/baseInterface";

export type GetStarshipResponseData = {
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  cost_in_credits: string;
  created: Date;
  crew: string;
  edited: Date;
  hyperdrive_rating: string;
  length: string;
  manufacturer: string;
  max_atmosphering_speed: string;
  model: string;
  name: string;
  passengers: string;
  films: Array<string>;
  pilots: Array<string>;
  starship_class: string;
  url: string;
};

export type GetStarshipResponse = BaseTableResponseDto<GetStarshipResponseData>;
