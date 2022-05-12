export const getToken = (tokenKey: string) => {
    return window.localStorage.getItem(`${tokenKey}`);
};