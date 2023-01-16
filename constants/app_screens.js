const app_screens = {

    //misc
    home : 'home',
    privacy : 'privacy',
    terms : 'terms',
    contact : 'contact',
    dataremoval : '/dataremoval',
    gdpr : '/gdpr',
    access_denied : '/accessdenied',

    //authentication
    auth_login : 'login',
    auth_register : 'register',
    auth_forgot_password : '/auth/forgotpassword',
    auth_reset_password : '/auth/resetpassword',
    auth_facebook : '/auth/facebook',
    auth_youtube : '/auth/youtube',
    auth_twitch : '/auth/twitch',
    auth_stripe : '/auth/stripe',
    auth_google : '/auth/google',
    auth_microsoft : '/auth/microsoft',
    auth_microsoft_teams : '/auth/teams',

    //accounts route
    account_update : '/accounts/update',
    acount_register_page_2 : '/accounts/register/step2',

    //streams route
    streams : 'streams',
    streams_create : 'streams_create',
    streams_update : '/streams/:id/update',
    streams_watch : '/streams/:id/watch',
    streams_broadcast : '/streams/:id/broadcast',
    streams_delete : '/streams/:id/delete',
    streams_cohost_password : '/streams/:id/cohostpassword?passcode=:passcode',
    streams_cohost_watch : '/streams/:id/cohostwatch',
    streams_recording_watch : '/streams/:id/watchrecording/:subid',
    streams_recording_update : '/streams/:id/updaterecording/:subid',

    //messages route
    messages : '/messages',
    message_thread : '/messages/thread',

    //users routes
    users_list : '/users',
    users_profile : '/users/:id/profile',
    users_followers: '/users/followers',
    users_following : '/users/following'
}

export default app_screens;