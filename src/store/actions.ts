export const ADD_USER = 'ADD_USER';
export const DEL_USER = 'DEL_USER';
export const CHANGE_OPEN_THREAD = 'CHANGE_OPEN_THREAD';

export const setUser = user => ({
    type: ADD_USER,
    payload: user
});
export const delUser = () => ({
    type: DEL_USER,
    payload: {}
});
export const changeOpenThread = body => ({
    type: CHANGE_OPEN_THREAD,
    payload: {
        thread: body.thread,
        user: body.user
    }
});