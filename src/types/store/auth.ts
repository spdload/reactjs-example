
export type  SignInErrorsType = {
    email?: string[],
    password?: string[]
} | null;

export type SignInTypes = {
    isLoading: boolean,
    loggedIn: boolean ,
    errors: SignInErrorsType
};

export type  SignUpErrorsType = {
    email?: string[],
    password?: string[]
} | null;

export interface SignUpTypes  {
    isLoading: boolean;
    signedUp: boolean ;
    isVerified: boolean;
    errors: SignUpErrorsType;
}


export type recoverPasswordTypes = {
    isLoading: boolean,
    sentEmail: boolean,
    errors: string | null
};