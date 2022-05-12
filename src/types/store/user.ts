import { UserInfoTypes } from 'types/user';

export interface  UserInfoReducerType {
    isLoading: boolean;
    user: UserInfoTypes | null;
    errors: string | null;
}

export interface  ChangePasswordReducerType {
    isLoading: boolean;
    isSuccess: boolean;
    errors: string | null;
}