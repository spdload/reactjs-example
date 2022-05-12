import { SET_CHATS_ACTIVE_TAB } from 'store/actions/chats';

export function ChatsReducer(state: any = {activeTab: '0'}, action: any) {
    switch (action.type) {
        case SET_CHATS_ACTIVE_TAB: {
            return {
              activeTab: action.payload
            };
        }
        default:
            return state;
    }
}
