export type CitiesType = {
  id: number;
  name: string;
};

export type AirportType = {
  id: number;
  code: string;
};

export type Airports = {
  id: number;
  code: string;
  code_iata: string;
  city:{
    id: number;
    name: string;
    country: Countries;
  }
};

export type Countries = {
  id: number;
  name: string;
  cities: CitiesType[];
};

export type CountriesReducer = {
  isLoading: boolean;
  errors: string | null;
  data: Countries[];
};

export type ErrorsType = {
  [key: string]: string
};

export type AirportReducer = {
  isLoading: boolean;
  errors: string | null;
  airports: Airports[];
};