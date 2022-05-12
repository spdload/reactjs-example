import { Moment } from 'moment';

import { CitiesType, Airports } from 'types/static';
import { UserInfoTypes } from '../user';

export type brandType = {
  id: number;
  name: string;
  slug: string;
};

type JetTypes = {
  brands: brandType[];
  id: number;
  name: string;
  slug: string;
};

export type JetDocumentType = {
  id: number;
  type: string;
  media: {
    id: number;
    image: string;
    name: string;
    extension: string;
    uploaded_at: string;
    size: string;
  };
};

export type JetImageType = {
  id: number;
  image: string;
  name: string;
  extension: string;
  uploaded_at: string;
  size: string;
  type: string;
};

export type JetDocumentsType = {
  'airworthiness-review-certificate': JetDocumentType;
  'jet-registration-certificate': JetDocumentType;
  'actual-weight-balance-report': JetDocumentType;
  'insurance-certificate': JetDocumentType;
  'noise-certificate': JetDocumentType;
  'latest-maintenance-report': JetDocumentType;
  'airworthiness-certificate': JetDocumentType;
  [key: string]: JetDocumentType;
};

export type JetModelType = {
  brand: brandType;
  id: number;
  landing_ground_run_distance: number;
  max_cruise_speed: number;
  name: string;
  normal_cruise_speed: number;
  seats: number;
  slug: string;
  takeoff_ground_run_distance: number;
  type: brandType;
};

export type JetRent = {
  id: number;
  startDate: string;
  startLocation: string;
  endLocation: string;
  endDate: string;
  name: string;
  avatar: string;
  status: string;
  isPaid: boolean;
};

  export type JetType = {
  rating: number | null;
  average_speed: string;
  include_engine_hours: number;
  city: CitiesType;
  country: CitiesType;
  airport: Airports;
  documents: JetDocumentsType;
  id: number;
  image_gallery: JetImageType[] | [];
  is_relocatable: boolean;
  model: JetModelType;
  preview_image: string | null;
  price_rate: number;
  unavailable_rent_dates: [] | Moment[];
  description?: string;
  is_followed: boolean
  owner?: {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    company_name?: string;
  }
  rent?: JetRent;
};

export type JetTypesStateType = {
  isLoading: boolean;
  errors: string | null;
  types: JetTypes[] | [];
};

export type MyJetsStateType = {
  isLoading: boolean;
  errors: string | null;
  myJets: JetType[] | [];
  currentPage: number;
  totalPages: number;
};

export type CurrentJetStateType = {
  isLoading: boolean;
  errors: string | null;
  currentJet: JetType | null;
};

export type JetTypesActionType = {
  type: string;
  payload: {
    types?: JetTypes[];
    errors?: Error;
  };
};

export type MyJetsActionType = {
  type: string;
  payload: {
    jets: JetType[] | [];
    errors?: Error;
    totalPages: number;
  };
};

export type CurrentJetActionType = {
  type: string;
  payload: {
    jet?: JetType;
    errors?: Error;
  };
};

export interface IRentType {
  final_city: {id: number, name: string};
  from_datetime: string;
  id: number;
  initial_city: {id: number, name: string};
  jet: JetType;
  status: string;
  to_datetime: string;
  user: UserInfoTypes;
}

export interface IRentReview {
  id: number;
  message: string | null;
  score: number;
  reviewer: {
    id: number;
    avatar: string;
    first_name: string;
    last_name: string;
    company_name?: string;
  };
  created_at: Date;
}
