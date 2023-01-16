
import api_routes from "../constants/api_routes";
import Session from "./Session";
import Storage from "./Storage";

import { API_URL } from '@env';


const Requests = {
    //Auth Routes
    authLogin : (data) => {
        let url = Requests._formatApiUrl(api_routes.auth_login.route);

        return Requests._sendRequest(url, api_routes.auth_login.method, data);
    },
    authRegister : (data) => {
        let url = Requests._formatApiUrl(api_routes.auth_register.route);

        return Requests._sendRequest(url, api_routes.auth_register.method, data);
    },
    authOneTimeLogin : (data) => {
        let url = Requests._formatApiUrl(api_routes.auth_one_time_login.route);

        return Requests._sendRequest(url, api_routes.auth_one_time_login.method, data);
    },
    authForgotPassword : (data) => {
        let url = Requests._formatApiUrl(api_routes.auth_forgot_password.route);

        return Requests._sendRequest(url, api_routes.auth_forgot_password.method, data);
    },
    authResetPassword : (data) => {
        let url = Requests._formatApiUrl(api_routes.auth_reset_password.route);

        return Requests._sendRequest(url, api_routes.auth_reset_password.method, data);
    },
    //Account
    updateAccount : (data) => {

        let url = Requests._formatApiUrl(api_routes.users_update.route);

        return Requests._sendRequest(url, api_routes.users_update.method, data);
    },
    //Events
    eventsList : (query) => {
        let url = Requests._formatApiUrl(api_routes.events_list.route);

        return Requests._sendRequest(url, api_routes.events_list.method, null, query);
    },
    eventsCreate : (data) => {
        let url = Requests._formatApiUrl(api_routes.events_create.route);

        return Requests._sendRequest(url, api_routes.events_create.method, data);
    },
    eventsView : (event_id, query) => {
        let url = Requests._formatApiUrl(api_routes.events_view.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_view.method, null, query);
    },
    eventsUpdate : (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_update.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_update.method, data);
    },
    eventsUpdateInvirtuEvent : (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_update_invirtu_event.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_update_invirtu_event.method, data);
    },
    eventsDelete : (event_id) => {
        let url = Requests._formatApiUrl(api_routes.events_delete.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_delete.method, {});
    },
    eventsAddRTMPSource: (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_add_rtmp_source.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_add_rtmp_source.method, data);
    },
    eventsUpdateRTMPSource: (event_id, stream_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_update_rtmp_source.route);

        url = url.replace('{event_id}', event_id);

        url = url.replace('{stream_id}', stream_id);

        return Requests._sendRequest(url, api_routes.events_update_rtmp_source.method, data);
    },
    eventsRemoveRTMPSource: (event_id, stream_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_remove_rtmp_source.route);

        url = url.replace('{event_id}', event_id);

        url = url.replace('{stream_id}', stream_id);

        return Requests._sendRequest(url, api_routes.events_remove_rtmp_source.method, data);
    },
    eventsSendOnScreenContent: (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_send_onscreen_content.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_send_onscreen_content.method, data);
    },
    //Recording
    recordingsUpdate : (event_id, recording_id, data) => {
        let url = Requests._formatApiUrl(api_routes.recordings_update.route);

        url = url.replace('{event_id}', event_id);

        url = url.replace('{recording_id}', recording_id);

        return Requests._sendRequest(url, api_routes.recordings_update.method, data);
    },
    eventsSetToBroadcastMode: (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_set_broadcast_mode.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_set_broadcast_mode.method, data);
    },
    eventsSetToLivestreamMode: (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_set_livestream_mode.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_set_livestream_mode.method , data);
    },
    eventsSyncAsLive: (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_sync_as_live.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_sync_as_live.method , data);
    },
    eventsSendInvite : (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_send_invite.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_send_invite.method , data);
    },
    eventsAcceptInvite : (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_accept_invite.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_accept_invite.method , data);
    },
    eventsAddOverlay : (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_add_overlay.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_add_overlay.method , data);
    },
    eventsRemoveOverlay : (event_id, overlay_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_remove_overlay.route);

        url = url.replace('{event_id}', event_id);

        url = url.replace('{overlay_id}', overlay_id);

        return Requests._sendRequest(url, api_routes.events_remove_overlay.method , data);
    },
    eventsEnableOverlay : (event_id, overlay_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_enable_overlay.route);

        url = url.replace('{event_id}', event_id);

        url = url.replace('{overlay_id}', overlay_id);

        return Requests._sendRequest(url, api_routes.events_enable_overlay.method , data);
    },
    eventsDisableOverlay : (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_disable_overlay.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_disable_overlay.method , data);
    },
    eventsEnableDonations : (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_enable_donations.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_enable_donations.method , data);
    },
    eventsDisableDonations : (event_id, data) => {
        let url = Requests._formatApiUrl(api_routes.events_disable_donations.route);

        url = url.replace('{event_id}', event_id);

        return Requests._sendRequest(url, api_routes.events_disable_donations.method , data);
    },

    //User(s)
    userList : (query) => {
        let url = Requests._formatApiUrl(api_routes.users_list.route);

        return Requests._sendRequest(url, api_routes.users_list.method, null, query);
    },
    userProfile : (user_id, query) => {
        let url = Requests._formatApiUrl(api_routes.users_profile.route);

        url = url.replace('{user_id}', user_id);

        return Requests._sendRequest(url, api_routes.users_profile.method, null, query);
    },
    userFollowers : (user_id, query) => {
        let url = Requests._formatApiUrl(api_routes.users_followers.route);

        url = url.replace('{user_id}', user_id);

        return Requests._sendRequest(url, api_routes.users_followers.method, null, query);
    },
    userFollowing : (user_id, query) => {
        let url = Requests._formatApiUrl(api_routes.users_following.route);

        url = url.replace('{user_id}', user_id);

        return Requests._sendRequest(url, api_routes.users_following.method, null, query);
    },
    userMe : (query) => {
        let url = Requests._formatApiUrl(api_routes.users_me.route);

        return Requests._sendRequest(url, api_routes.users_me.method, null, query);
    },
    userOneTimeToken : (query) => {
        let url = Requests._formatApiUrl(api_routes.users_one_time_token.route);

        return Requests._sendRequest(url, api_routes.users_one_time_token.method, null, query);
    },
    userUploadAvatar : (data, query) => {
        let url = Requests._formatApiUrl(api_routes.users_upload_avatar.route);

        return Requests._sendRequest(url, api_routes.users_upload_avatar.method, data, query);
    },
    userUploadBanner : (data, query) => {
        let url = Requests._formatApiUrl(api_routes.users_upload_banner.route);

        return Requests._sendRequest(url, api_routes.users_upload_banner.method, data, query);
    },
    userCreateDonationsPage : (data, query) => {
        let url = Requests._formatApiUrl(api_routes.users_create_donation_page.route);

        return Requests._sendRequest(url, api_routes.users_create_donation_page.method, data, query);
    },
    userToggleFollow : (user_id, data,query) => {
        let url = Requests._formatApiUrl(api_routes.users_toggle_follow.route);

        url = url.replace('{user_id}', user_id);

        return Requests._sendRequest(url, api_routes.users_toggle_follow.method, data, query);
    },
    //Private Functions
    _formatApiUrl : (url) => {
        return API_URL + url;
    },
    _sendRequest : async (url, method, data, query) => {

        let body = null;

        if(query){
            url = "?" + this.toQueryString(query);
        }

        let headers =  {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        if(data instanceof FormData && data !== null) {
            body = data;
            delete headers['Accept'];
            delete headers['Content-Type'];
        } else if(typeof data === 'object' && data !== null) {
            body = JSON.stringify(data);
        }

        if(Storage.getAuthToken()) {
            headers['Authorization'] = 'Bearer ' + await Storage.getAuthToken();
        }
        

        return fetch(url, {
            method: method,
            headers: headers,
            body: body
        }).then(function(res){ 

            if(!res.ok) {

                return res.text().then(text => { throw new Error(text) })
            } else {
               return res.json();
            }   
        });
    },
    _toQueryString : (obj) => {
        var str = [];
        for (var p in obj)
          if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
          }
        return str.join("&");
    }
    
}

export default Requests;