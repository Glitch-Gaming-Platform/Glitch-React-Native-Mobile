
/**
 * The routes to the endpoints.
 */

const api_routes = {
    //Authentication Routes
    auth_login : {
        route : '/auth/login',
        method : 'POST',
    },
    auth_register : { 
        route :'/auth/register',
        method : 'POST'
    },
    auth_one_time_login : { 
        route :'/auth/oneTimeLoginWithToken',
        method : 'POST'
    },
    auth_forgot_password : { 
        route :'/auth/forgotpassword',
        method : 'POST'
    },
    auth_reset_password : { 
        route :'/auth/resetpassword',
        method : 'POST'
    },

    //Events
    events_list : {
        route: '/events',
        method : 'GET'
    },
    events_create : {
        route : '/events',
        method : 'POST'
    },
    events_view : {
        route : '/events/{event_id}',
        method : 'GET'
    },
    events_update : {
        route : '/events/{event_id}',
        method : 'PUT'
    },
    events_delete : {
        route : '/events/{event_id}',
        method : 'DELETE'
    },
    events_add_rtmp_source : {
        route : '/events/{event_id}/addRTMPSource',
        method : 'POST'
    },
    events_update_rtmp_source : {
        route : '/events/{event_id}/updateRTMPSource/{stream_id}',
        method : 'PUT'
    },
    events_remove_rtmp_source : {
        route : '/events/{event_id}/removeRTMPSource/{stream_id}',
        method : 'DELETE'
    },
    events_upload_main_image : {
        route : '/events/{event_id}/uploadMainImage',
        method : 'POST'
    },
    events_upload_main_banner : {
        route : '/events/{event_id}/uploadBannerImage',
        method : 'POST'
    },
    events_set_broadcast_mode : {
        route : '/events/{event_id}/enableBroadcastMode',
        method : 'POST'
    },
    events_set_livestream_mode : {
        route : '/events/{event_id}/enableLivestreamMode',
        method : 'POST'
    },
    events_sync_as_live : {
        route : '/events/{event_id}/syncAsLive',
        method : 'POST'
    },
    events_send_invite : {
        route : '/events/{event_id}/sendInvite',
        method : 'POST'
    },
    events_accept_invite : {
        route : '/events/{event_id}/acceptInvite',
        method : 'POST'
    },
    events_send_onscreen_content : {
        route : '/events/{event_id}/sendOnScreenContent',
        method : 'POST'
    },
    events_update_invirtu_event : {
        route : '/events/{event_id}/invirtu',
        method : 'PUT'
    },
    events_add_overlay : {
        route : '/events/{event_id}/addOverlay',
        method : 'POST'
    },
    events_remove_overlay : {
        route : '/events/{event_id}/removeOverlay/{overlay_id}',
        method : 'DELETE'
    },
    events_enable_overlay : {
        route : '/events/{event_id}/enableOverlay/{overlay_id}',
        method : 'POST'
    },
    events_disable_overlay : {
        route : '/events/{event_id}/disableOverlay',
        method : 'POST'
    },
    events_enable_donations : {
        route : '/events/{event_id}/enableDonations',
        method : 'POST'
    },
    events_disable_donations : {
        route : '/events/{event_id}/disableDonations',
        method : 'POST'
    },

    //Messages
    messages_list : {
        route: '/messages',
        method : 'GET'
    },
    messages_all_conversations : {
        route: '/messages/threads',
        method : 'GET'
    },
    messages_create_thread : {
        route: '/messages/threads',
        method : 'GET'
    },
    messages_send : {
        route: '/messages',
        method : 'POST'
    },
    messages_update : {
        route: '/messages/{message_id}',
        method : 'PUT'
    },
    messages_delete : {
        route: '/messages/{message_id}',
        method : 'DELETE'
    },

    //Recordings
    recordings_update : {
        route: '/events/{event_id}/recording/{recording_id}',
        method : 'PUT'
    },

    //Users
    users_list : {
        route: '/users',
        method : 'GET'
    },
    users_update : {
        route: '/users',
        method : 'PUT'
    },
    users_profile : {
        route: '/users/{user_id}/profile',
        method : 'GET'
    },
    users_me : {
        route: '/users/me',
        method : 'GET'
    },
    users_one_time_token : {
        route: '/users/oneTimeToken',
        method : 'GET'
    },
    users_profile : {
        route: '/users/{user_id}/profile',
        method : 'GET'
    },
    users_followers : {
        route: '/users/{user_id}/followers',
        method : 'GET'
    },
    users_following : {
        route: '/users/{user_id}/following',
        method : 'GET'
    },
    users_toggle_follow : {
        route: '/users/{user_id}/follow',
        method : 'POST'
    },
    users_upload_avatar : {
        route: '/users/uploadAvatarImage',
        method : 'POST'
    },
    users_upload_banner : {
        route: '/users/uploadBannerImage',
        method : 'POST'
    },
    users_create_donation_page : {
        route: '/users/createDonationPage',
        method : 'POST'
    },


}

export default api_routes;