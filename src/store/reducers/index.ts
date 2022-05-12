import { combineReducers } from 'redux';
import {
  signInReducer,
  signUpReducer,
  recoverPasswordReducer,
} from 'store/reducers/auth';
import { changePasswordReducer, userInfoReducer } from 'store/reducers/user';
import { CountriesReducer } from './countries';
import { CurrentJetReducer, JetTypesReducer, MyJetsReducer } from './jets';
import { JetRentFiltersReducer } from './rentFilter';
import { RentRequestsReducer } from './rentRequests';
import { ChatsReducer } from './chats';
import { TripSearchReducer } from './tripSearch';
import { BookingTripReducer } from './bookingTrip';
import { CitiesReducer } from './cities';
import {PilotInfoReducer} from './pilotInfo';
import { AirportsReducer } from './airports';

export const rootReducer = combineReducers({
  signIn: signInReducer,
  signUp: signUpReducer,
  recoverPassword: recoverPasswordReducer,
  user: userInfoReducer,
  changePassword: changePasswordReducer,
  countries: CountriesReducer,
  jetsTypes: JetTypesReducer,
  myJets: MyJetsReducer,
  currentJet: CurrentJetReducer,
  jetRentFilters: JetRentFiltersReducer,
  rentRequests: RentRequestsReducer,
  chats: ChatsReducer,
  tripSearch: TripSearchReducer,
  bookingTrip: BookingTripReducer,
  cities: CitiesReducer,
  airports: AirportsReducer,
  pilotInfo: PilotInfoReducer,

});
