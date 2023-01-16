import Storage from "./Storage";

const Session = {
    _id_key : 'user_id',
    _first_name_key : 'user_first_name',
    _last_name_key : 'user_last_name',
    _email_key : 'email',
    isLoggedIn: ()=> {

        if(Storage.getAuthToken() == null || Storage.getAuthToken() == 'null' || Storage.getAuthToken() == undefined) {
            return false;
        }

       return true;

    },
    getAuthToken : async () => {
        return await Storage.getAuthToken()
    },
    getID : () => {
        return Storage.get(Session._id_key);
    },
    getFirstName : () => {
        return Storage.get(Session._first_name_key);
    },
    getLastName : () => {
        return Storage.get(Session._last_name_key);
    },
    getEmail : () => {
        return Storage.get(Session._email_key);
    },
    end : () => {

        Storage.setAuthToken(null);
        Storage.set(Session._id_key, null);
        Storage.set(Session._first_name_key, null);
        Storage.set(Session._last_name_key, null);
        Storage.set(Session._email_key, null);

    },
    processAuthentication : (data) => {

        Storage.setAuthToken(data.token.access_token);

        Storage.set(Session._id_key, data.id);

        Storage.set(Session._first_name_key, data.first_name);

        Storage.set(Session._last_name_key, data.last_name);

        Storage.set(Session._email_key, data.email);

    }


}

export default Session;