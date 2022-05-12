import { JetType } from './jets';
import { UserInfoTypes } from '../user';
import { CitiesType, AirportType, ErrorsType } from 'types/static';

// COMMON TYPES

export type TTripStatus = 'draft' | 'pending' | 'active' | 'finished' | 'canceled';

export type TBookingStatus = 'draft' | 'request' | 'confirmed' | 'paid';

export type TLuggage = {
  id: number | null,
  weight: number
};

export type TCity = {
  id: number
    name: string
    country_name: string
    airports: {
      id: number
      code: string
    }[]
} | null;

export type TCityWithAirport = {
  id: number
    name: string
    country_name: string
    airports: {
      id: number
      code: string
    }[]
    airport: {
      id: number
      code: string
    }
} | null;

// COMMON INTERFACES

export interface ITripSearchFilter {
  from_airport_id: string;
  to_airport_id: string;
  start_date: string;
  // arrival_date: string
  passengers: string;
}

export interface ITrip {
  id: number;
  jet: JetType;
  pilot: UserInfoTypes;
  traveler: UserInfoTypes;
  status: TTripStatus;
  type: 'one_way' | 'round';
  price: number;
  price_total: number;
  from_city: CitiesType;
  from_airport: AirportType;
  to_city: CitiesType;
  to_airport: AirportType;
  start_datetime: string;
  end_datetime: string;
  flying_time: string;
  flying_time_string: string; 
}

export interface IPassenger {
  id: number;
  first_name: string;
  last_name: string;
  is_adult: boolean;
  type: 'prime' | 'additional';
  gender: 'male' | 'female';
  birthdate: string;
  nationality: string;
  passport_id: string;
  passport_issue_date: string;
  luggage_type: TLuggage;
  carry_on_included: boolean;
}

export interface IPassengerForSend {
  first_name: string;
  last_name: string;
  type: 'prime' | 'additional';
  birthdate: string;
  nationality: string;
  passport_id: string;
  passport_issue_date: string;
  luggage_type_id: number | null;
  carry_on_included: boolean;
}

// PAYLOADS

export type TGetCitiesPayload = {
  type: 'cities_arrival' | 'cities_departure'
  cities?: TCity[]
  params?: string
};

export type TBookingTripPayload = {
  trip: ITrip[] | []
  passengers: IPassenger
  luggageTypes: TLuggage[]
  booking_id: number
  errors?: ErrorsType
};

export type TCreateBookingPayload = {
  trip_id: number
};

export type TUpdateBookingPayload = {
  booking_id: number
  passengers: number[]
  status: TBookingStatus
};

export type TCreatePassengerPayload = {
 booking_id: number
 passenger: IPassengerForSend
};

export type TUpdatePassengerPayload = {
  booking_id: number
  passenger_id: number
  passenger: IPassengerForSend
};

export type TDeletePassengerPayload = {
  booking_id: number
  passenger_id: number
};

// ACTIONS

export interface ITripSearchAction {
  type: string;
  payload: TGetCitiesPayload;
}

export interface IBookingTripAction {
  type: string;
  payload: TBookingTripPayload;
}

export interface ICreateBookingAction {
  type: string;
  payload: TCreateBookingPayload;
}

export interface IUpdateBookingAction {
  type: string;
  payload: TUpdateBookingPayload;
}
export interface ICreatePassengerAction {
  type: string;
  payload: TCreatePassengerPayload;
}
export interface IUpdatePassengerAction {
  type: string;
  payload: TUpdatePassengerPayload;
}

export interface IDeletePassengerAction {
  type: string;
  payload: TDeletePassengerPayload;
}

// STATES

export interface ICitiesState {
  cities_departure: TCity[];
  cities_arrival: TCity[];
}

export interface ITripSearchState {
  sort: 'start_datetime' | '-start_datetime';
  isShowNearby: boolean;
  isShowAll: boolean;
  from_airport_id: string;
  to_airport_id: string;
  start_date: string;
  // arrival_date: string
  passengers: string;
}

export interface IBookingTripState {
  isLoading: boolean;
  errors: ErrorsType | null;
  trip: ITrip | null;
  passengers: IPassenger[] | null;
  luggageTypes: TLuggage[] | null;
}
