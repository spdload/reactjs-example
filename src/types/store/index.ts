import { SignInTypes, SignUpTypes, recoverPasswordTypes } from './auth';
import { UserInfoReducerType } from './user';
import { AirportReducer, Countries, CountriesReducer } from 'types/static';
import {
  CurrentJetStateType,
  JetTypesStateType,
  MyJetsStateType,
} from './jets';
import { RentFiltersType } from './rentFilters';
import { IRentRequestsReducer } from './rentRequests';
import { ITripSearchState, IBookingTripState, ICitiesState } from './trips';
import { PilotInfoReducerType } from 'types/store/pilot';

export default interface RootState {
  signIn: SignInTypes;
  signUp: SignUpTypes;
  recoverPassword: recoverPasswordTypes;
  user: UserInfoReducerType;
  changePassword: any;
  countries: CountriesReducer;
  jetsTypes: JetTypesStateType;
  myJets: MyJetsStateType;
  currentJet: CurrentJetStateType;
  jetRentFilters: RentFiltersType;
  rentRequests: IRentRequestsReducer;
  tripSearch: ITripSearchState;
  bookingTrip: IBookingTripState;
  cities: ICitiesState;
  airports: AirportReducer;
  pilotInfo: PilotInfoReducerType
}
