import { LOGOUT_USER_SUCCESS, VERIFY_EMAIL_FAIL, VERIFY_EMAIL_SUCCESS } from '../actions/auth.actions';
import {
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    GET_USER_FAIL,
    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    RESET_CHANGE_PASSWORD,
    DELETE_AVATAR_SUCCESS,
} from 'store/actions/user';
import { UserInfoTypes, ChangePasswordTypes } from 'types/user';
import { UserInfoReducerType, ChangePasswordReducerType } from 'types/store/user';

type UserActionsTypes = {
    type: string,
    payload: UserInfoTypes | Error
};

const initialUserState = {
    isLoading: false,
    user: null,
    errors: null
};

export function userInfoReducer(state: UserInfoReducerType = initialUserState, action: UserActionsTypes) {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return {
                ...state,
                isLoading: true,
                errors: null,
            };
        }
        case GET_USER_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                errors: null,
                user: action.payload
            };
        }
        case GET_USER_FAIL: {
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
                user: null
            };
        }
        case VERIFY_EMAIL_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                errors: null,
                user: {
                    ...state.user,
                    is_email_verified: true
                }
            };
        }
        case VERIFY_EMAIL_FAIL: {
            return {
                ...state,
                isLoading: false,
                errors: action.payload,
            };
        }
        case DELETE_AVATAR_SUCCESS: {
            return {
                ...state, 
                user: {
                    ...state.user,
                    avatar: ''
                }
            };
        }
        case LOGOUT_USER_SUCCESS: {
            return initialUserState;
        }
        default:
            return state;
    }
}

type ChangePasswordActionsTypes = {
    type: string,
    payload: ChangePasswordTypes | Error
};

export function changePasswordReducer(state: ChangePasswordReducerType = {isLoading: false, isSuccess: false, errors: null}, action: ChangePasswordActionsTypes) {
    switch (action.type) {
        case CHANGE_PASSWORD_REQUEST: {
            return {
                ...state,
                isLoading: true,
                isSuccess: false,
                errors: null,
            };
        }
        case CHANGE_PASSWORD_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                isSuccess: true,
                errors: null,
            };
        }
        case CHANGE_PASSWORD_FAIL: {
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                errors: action.payload,
            };
        }
        case RESET_CHANGE_PASSWORD: {
            return {
                ...state,
                isLoading: false,
                isSuccess: false,
                errors: null,
            };
        }   
        default:
            return state;
    }
}
