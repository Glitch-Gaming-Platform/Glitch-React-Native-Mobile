import app_screens from "../constants/app_screens";

const Screens = {

    //Misc Route
    getHome(){
        return app_screens.home;
    },
    getPrivacy() {
        return app_screens.privacy;
    },
    getTerms() {
        return app_screens.terms;
    },
    getContact() {
        return app_screens.contact;
    },

    //Auth
    getAuthLogin() {
        return app_screens.auth_login;
    },
    getAuthRegister() {
        return app_screens.auth_register;
    },
    getAuthForgotPassword() {
        return app_screens.auth_forgot_password;
    },

    //Events
    getListStreams() {
        return app_screens.streams;
    },
    getCreateStream() {
        return app_screens.streams_create;
    },
    getWatchStreams() {
        return app_screens.streams_watch;
    },
    getManageStream() {
        return app_screens.streams_broadcast;
    },
    getProduceStream() {

    }
}

export default Screens;