export interface PilotInfoReducerType {
  id: any;
  isLoading: boolean;
  isSuccess: boolean;
  data: PilotInfoTypes;
  errors: string | null;
}

export interface PilotInfoTypes {
  id: number;
  email: string;
  avatar: string;
  first_name: string;
  last_name: string;
  gender: string;
  birthdate: null;
  price_rate: number;
  flying_hours: number;
  pic_time: number;
  ifr_time: number;
  jets: Jet[];
  is_email_verified: boolean;
  profile_verification_status: string;
  role: string;
  is_active: boolean;
  documents: any;
  contact_information: ContactInformation;
}

export interface ContactInformation {
  phone: string;
  zip_code: string;
  address_first: string;
  address_second: string;
  city: CityElement;
  country: CityElement;
}

export interface CityElement {
  id: number;
  name: string;
}

export interface Documents {
  passport: Passport;
  "driver-license": DriverLicense;
}

export interface DriverLicense {
  id: number;
  type: string;
  media: Media;
  data: any[];
}

export interface Media {
  id: number;
  image: string;
  name: string;
  extension: string;
  uploaded_at: Date;
  size: string;
}

export interface Passport {
  id: number;
  type: string;
  media: Media;
  data: Data;
}

export interface Data {
  nationality: string;
  passport_id: string;
  expiration_date: Date;
}

export interface Jet {
  id: number;
  preview_image: string;
  rating: null;
  airport: Airport;
  city: CityElement;
  country: Country;
  model: Model;
  average_speed: number;
  is_relocatable: boolean;
  is_followed: boolean;
  include_engine_hours: boolean;
  price_rate: number;
  description: string;
}

export interface Airport {
  id: number;
  code: string;
  code_iata: string;
  city: AirportCity;
}

export interface AirportCity {
  id: number;
  name: string;
  country: CityElement;
}

export interface Country {
  id: number;
  name: string;
  cities: CityElement[];
}

export interface Model {
  id: number;
  name: string;
  slug: string;
  seats: number;
  normal_cruise_speed: number;
  max_cruise_speed: number;
  takeoff_ground_run_distance: number;
  landing_ground_run_distance: number;
  brand: Brand;
  type: Brand;
}

export interface Brand {
  id: number;
  name: string;
  slug: string;
}
