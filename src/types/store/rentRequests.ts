import { JetType } from "./jets";
import { UserInfoTypes } from "../user";
import { CitiesType, ErrorsType } from "../static";

type RentCityType = CitiesType & {
  country: CitiesType;
};

export interface IRentRequest {
  is_paid: boolean;
  id: number;
  status: string;
  status_label: string;
  jet: JetType;
  user: UserInfoTypes;
  initial_city: RentCityType;
  final_city: RentCityType;
  from_datetime: string;
  to_datetime: string;
  own_review_exists: boolean;
}

export interface IRentRequestsReducer {
  requests: IRentRequest[] | [];
  currentPage: number;
  totalPages: number;
  isLoading: boolean;
  errors: ErrorsType;
}

export interface IRentRequestsAction {
  type: string;
  payload: {
    requests: IRentRequest[] | [];
    errors?: ErrorsType;
    totalPages: number;
  };
}
export interface Documents {
  id: string;
  type: string;
  media: Media;
  data: null;
}

export interface Media {
  id: string;
  image: string;
  name: string;
  extension: string;
  uploaded_at: Date;
  size: string;
}

export type RentRequestType = "inbox" | "outbox";
