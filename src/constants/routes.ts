export const HOME = '/';

// Auth
export const SIGN_IN = '/sign-in';
export const SIGN_UP_TRAVELER = '/traveler/sign-up';
export const SIGN_UP_PILOT = '/pilot/sign-up';
export const SIGN_UP_COMPANY = '/company/sign-up';
export const SIGN_UP_PERSONAL = '/personal/sign-up';

// Email verification
export const CONFIRM_EMAIL = '/confirm-email';
export const EMAIL_VERIFIED = '/confirm-email-success';
export const EMAIL_VERIFICATION_FAIL = '/confirm-email-fail';

// Password recovering
export const FORGOT_PASSWORD = '/forgot-password';
export const NEW_PASSWORD = '/new-password';
export const RESET_PASSWORD_SUCCESS = '/reset-password-success';
export const CHECK_EMAIL = '/change-password-check-email';

// Dashboard
export const DASHBOARD = '/dashboard';
export const PROFILE = '/dashboard/profile';
export const CHAT = '/dashboard/chat/:id?';
export const TRIP_SEARCH = '/dashboard/book-trips';
export const BOOK_A_TRIP = '/dashboard/booking/:id';
export const CREATE_TRIP = '/dashboard/create-trip';
export const FIND_TRIPS = '/dashboard/find-trips';
export const MY_TRIPS = '/dashboard/my-trips';
export const NOTIFICATIONS = '/dashboard/notifications';
export const CALENDAR = '/dashboard/calendar';
export const PROFILE_PILOT = '/dashboard/profile-pilot/:id';


// Jets
export const JET_ADD = '/dashboard/profile/add-jet/:id?';
export const JET_RENT = '/dashboard/jet-rent';
export const JETS_TO_RENT = '/dashboard/rent-out';
export const JET_PAGE = '/dashboard/jet/:id';
export const RENT_REQUEST_PAGE = '/dashboard/rent-request/:id/:rentId';

// Rating
export const REVIEW_PAGE = '/dashboard/review/:id';