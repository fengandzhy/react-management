import store from 'store';
const USER_KEY = 'user_key';

const storage = {
    saveUser(user) {
        // localStorage.setItem(USER_KEY,JSON.stringify(user));
        store.set(USER_KEY,user);
    },
    getUser() {
        // JSON.parse(localStorage.getItem(USER_KEY) || '{}');
        return store.get(USER_KEY) || {};
    },

    removeUser(){
        // localStorage.removeItem(USER_KEY);
        store.remove(USER_KEY);
    }
};

export default storage;

