import { JetDocumentType } from './store/jets';
import { TCity } from './store/trips';

export type UserSignInType =  {
    email: string,
    password: string
};
export interface UserSignUpType extends UserSignInType {
   first_name: string;
   last_name: string;
   password_confirmation: string;
}
export interface UserCompanySignUpType extends UserSignInType {
    company_name: string;
    password_confirmation: string;
 }

 export type RecoverPasswordEmailTypes = {
     email: string
 };

 export type NewPasswordTypes = {
    password: string,
    password_confirmation: string
};

 export interface NewPasswordEmailTypes extends NewPasswordTypes {
    token: string;
}

export type  VerifyParamsTypes = {
    id: string,
    hash: string
  };

  export interface  VerifyEmailParamsTypes extends VerifyParamsTypes {
    email: string;
  }

  export type UserInfoTypes = {
    id: number,
    email: string,
    avatar: string;
    first_name: string,
    last_name: string,
    company_name?: string,
    gender: string,
    birthdate?: string,
    passport?: string
    is_email_verified: boolean,
    role: string,
    is_active: boolean,
    contact_information?: {
      phone: string;
      zip_code: string;
      address_first: string;
      address_second: string;
      city: TCity
      country: TCity
    };
    price_rate: number;
    flying_hours?: number;
    reviews_avg_score?: string
    reviews_count?: number
    pic_time?: number;
    ifr_time?: number;
    profile_verification_status: string;
    documents: {
      [key: string]: JetDocumentType & {
        data: {
          nationality: string;
          passport_id: string;
          expiration_date: string;
        }};
    };
    is_personal?: boolean;
  };

  export interface ChangePasswordTypes extends NewPasswordTypes {
      old_password: string;
  }
