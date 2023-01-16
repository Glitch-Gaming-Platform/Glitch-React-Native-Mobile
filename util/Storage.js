
//A persistent data kept in the browser
//will not persist if user refreshes or window.location is used for navigation
//Only good for "single page apps"
let data = {};

import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Storage = {

    _load : async() => {
        const keys = await AsyncStorage.getAllKeys()
        const values = await AsyncStorage.multiGet(keys)

    },
    set: async (key, value) => {
        try {
            //await SecureStore.setItemAsync(key, value);
            await AsyncStorage.setItem(key, value)
        } catch (e) {
            console.error(e);
            //fallback if set cookie fails
            data[key] = value;


        }
    },
    get: async (key) => {
       
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);
        
        try {

            //let result = await SecureStore.getItemAsync(key);
            let result = await AsyncStorage.getItem(key);

            if (result) {
                return result;
            }

            return null;
        } catch (e) {

            console.error(e);

            value = data[key];

            return value;
        }
    },
    setAuthToken(token) {
        Storage.set('glitch_auth_token', token)
    },
    getAuthToken() {
        return Storage.get('glitch_auth_token');
    },
    setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }

        //IFrames require HttpyOnly to be false, Chrome require SameSite to be none, and must be secure
        document.cookie = name + "=" + (value || "") + expires + "; path=/; HttpOnly=false; SameSite=none; Secure";
    },
    getCookie(name) {

        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    eraseCookie(name) {
        document.cookie = name + '=; Secure; HttpOnly=false; SameSite=none; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

}

export default Storage;