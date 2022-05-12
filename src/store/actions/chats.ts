export const SET_CHATS_ACTIVE_TAB = 'SET_CHATS_ACTIVE_TAB';


// logout user
export function setChatsActiveTab(payload: any) {
    return {
        type: SET_CHATS_ACTIVE_TAB,
        payload
    };
}