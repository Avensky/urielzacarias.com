//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled

/*******************************************
********************************************
 * Cart
********************************************
*******************************************/

export const ADD_TO_CART              = 'ADD_TO_CART';
export const REMOVE_ITEM              = 'REMOVE_ITEM';
export const SUB_QUANTITY             = 'SUB_QUANTITY';
export const ADD_QUANTITY             = 'ADD_QUANTITY';
export const ADD_SHIPPING             = 'ADD_SHIPPING';
export const SUB_SHIPPING             = 'SUB_SHIPPING';
export const LOAD_CART                = 'LOAD_CART';
export const LOAD_SHOP                = 'LOAD_SHOP';


/*******************************************
********************************************
 * Auth
********************************************
*******************************************/

export const LOGIN_START              = 'LOGIN_START';
export const LOGIN_SUCCESS            = 'LOGIN_SUCCESS';
export const LOGIN_FAIL               = 'LOGIN_FAIL';
export const LOGOUT                   = 'LOGOUT';
export const SET_LOGIN_REDIRECT_PATH  = 'SET_LOGIN_REDIRECT_PATH';

export const AUTH_START               = 'AUTH_START';
export const AUTH_SUCCESS             = 'AUTH_SUCCESS';
export const AUTH_FAIL                = 'AUTH_FAIL';
export const AUTH_LOGOUT              = 'AUTH_LOGOUT';

export const FB_AUTH_START            = 'FB_AUTH_START';
export const FB_AUTH_SUCCESS          = 'FB_AUTH_SUCCESS';
export const FB_AUTH_FAIL             = 'FB_AUTH_FAIL';
export const FB_AUTH_LOGOUT           = 'FB_AUTH_LOGOUT';

export const CONNECT_START            = 'CONNECT_START';
export const CONNECT_SUCCESS          = 'CONNECT_SUCCESS';
export const CONNECT_FAIL             = 'CONNECT_FAIL';
export const CONNECT_LOGOUT           = 'CONNECT_LOGOUT';

export const FETCH_USER_START         = 'FETCH_USER_START';
export const FETCH_USER_SUCCESS       = 'FETCH_USER_SUCCESS';
export const FETCH_USER_FAIL          = 'FETCH_USER_FAIL';
export const FETCH_USER               = 'FETCH_USER';

export const FETCH_USERS_START        = 'FETCH_USERS_START';
export const FETCH_USERS_SUCCESS      = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAIL         = 'FETCH_USERS_FAIL';
export const FETCH_USERS              = 'FETCH_USERS';

export const GET_USER_START           = 'GET_USER_START';
export const GET_USER_SUCCESS         = 'GET_USER_SUCCESS';
export const GET_USER_FAIL            = 'GET_USER_FAIL';
export const GET_USER                 = 'GET_USER';

export const SIGNUP_START             = 'SIGNUP_START';
export const SIGNUP_SUCCESS           = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL              = 'SIGNUP_FAIL';
export const SIGNUP                   = 'SIGNUP';


/*******************************************
********************************************
 * Characters
********************************************
*******************************************/

export const NEW_CHARACTER_START      = 'NEW_CHARACTER_START';
export const NEW_CHARACTER_SUCCESS    = 'NEW_CHARACTER_SUCCESS';
export const NEW_CHARACTER_FAIL       = 'NEW_CHARACTER_FAIL';
export const NEW_CHARACTER            = 'NEW_CHARACTER';

export const GET_CHARACTERS_START     = 'GET_CHARACTERS_START';
export const GET_CHARACTERS_SUCCESS   = 'GET_CHARACTERS_SUCCESS';
export const GET_CHARACTERS_FAIL      = 'GET_CHARACTERS_FAIL';
export const GET_CHARACTERS           = 'GET_CHARACTERS';


export const GET_CHAR_BY_ID_START     = 'GET_CHAR_BY_ID_START';
export const GET_CHAR_BY_ID_SUCCESS   = 'GET_CHAR_BY_ID_SUCCESS';
export const GET_CHAR_BY_ID_FAIL      = 'GET_CHAR_BY_ID_FAIL';
export const GET_CHAR_BY_ID           = 'GET_CHAR_BY_ID';


export const DELETE_CHAR_START        = 'DELETE_CHAR_START';
export const DELETE_CHAR_SUCCESS      = 'DELETE_CHAR_SUCCESS';
export const DELETE_CHAR_FAIL         = 'DELETE_CHAR_FAIL';
export const DELETE_CHAR              = 'DELETE_CHAR';


export const UPDATE_CHAR_START        = 'UPDATE_CHAR_START';
export const UPDATE_CHAR_SUCCESS      = 'UPDATE_CHAR_SUCCESS';
export const UPDATE_CHAR_FAIL         = 'UPDATE_CHAR_FAIL';
export const UPDATE_CHAR              = 'UPDATE_CHAR';


/*******************************************
********************************************
 * Items
********************************************
*******************************************/

export const NEW_ITEM_START           = 'NEW_ITEM_START';
export const NEW_ITEM_SUCCESS         = 'NEW_ITEM_SUCCESS';
export const NEW_ITEM_FAIL            = 'NEW_ITEM_FAIL';
export const NEW_ITEM                 = 'NEW_ITEM';


export const GET_ITEMS_START          = 'GET_ITEMS_START';
export const GET_ITEMS_SUCCESS        = 'GET_ITEMS_SUCCESS';
export const GET_ITEMS_FAIL           = 'GET_ITEMS_FAIL';
export const GET_ITEMS                = 'GET_ITEMS';


export const GET_ITEM_BY_ID_START     = 'GET_ITEM_BY_ID_START';
export const GET_ITEM_BY_ID_SUCCESS   = 'GET_ITEM_BY_ID_SUCCESS';
export const GET_ITEM_BY_ID_FAIL      = 'GET_ITEM_BY_ID_FAIL';
export const GET_ITEM_BY_ID           = 'GET_ITEM_BY_ID';

export const GET_ITEM_BY_TYPE_START   = 'GET_ITEM_BY_TYPE_START';
export const GET_ITEM_BY_TYPE_SUCCESS = 'GET_ITEM_BY_TYPE_SUCCESS';
export const GET_ITEM_BY_TYPE_FAIL    = 'GET_ITEM_BY_TYPE_FAIL';
export const GET_ITEM_BY_TYPE         = 'GET_ITEM_BY_TYPE';


export const DELETE_ITEM_START        = 'DELETE_ITEM_START';
export const DELETE_ITEM_SUCCESS      = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAIL         = 'DELETE_ITEM_FAIL';
export const DELETE_ITEM              = 'DELETE_ITEM';


export const UPDATE_ITEM_START        = 'UPDATE_ITEM_START';
export const UPDATE_ITEM_SUCCESS      = 'UPDATE_ITEM_SUCCESS';
export const UPDATE_ITEM_FAIL         = 'UPDATE_ITEM_FAIL';
export const UPDATE_ITEM              = 'UPDATE_ITEM';


/*******************************************
********************************************
 * Faq
********************************************
*******************************************/

export const NEW_FAQ_START            = 'NEW_FAQ_START';
export const NEW_FAQ_SUCCESS          = 'NEW_FAQ_SUCCESS';
export const NEW_FAQ_FAIL             = 'NEW_FAQ_FAIL';
export const NEW_FAQ                  = 'NEW_FAQ';


export const GET_FAQS_START           = 'GET_FAQS_START';
export const GET_FAQS_SUCCESS         = 'GET_FAQS_SUCCESS';
export const GET_FAQS_FAIL            = 'GET_FAQS_FAIL';
export const GET_FAQS                 = 'GET_FAQS';


export const GET_FAQ_BY_ID_START      = 'GET_FAQ_BY_ID_START';
export const GET_FAQ_BY_ID_SUCCESS    = 'GET_FAQ_BY_ID_SUCCESS';
export const GET_FAQ_BY_ID_FAIL       = 'GET_FAQ_BY_ID_FAIL';
export const GET_FAQ_BY_ID            = 'GET_FAQ_BY_ID';


export const DELETE_FAQ_START         = 'DELETE_FAQ_START';
export const DELETE_FAQ_SUCCESS       = 'DELETE_FAQ_SUCCESS';
export const DELETE_FAQ_FAIL          = 'DELETE_FAQ_FAIL';
export const DELETE_FAQ               = 'DELETE_FAQ';
    

export const UPDATE_FAQ_START         = 'UPDATE_FAQ_START';
export const UPDATE_FAQ_SUCCESS       = 'UPDATE_FAQ_SUCCESS';
export const UPDATE_FAQ_FAIL          = 'UPDATE_FAQ_FAIL';
export const UPDATE_FAQ               = 'UPDATE_FAQ';


/*******************************************
********************************************
 * Adress
********************************************
*******************************************/

export const NEW_ADDRESS_START        = 'NEW_ADDRESS_START';
export const NEW_ADDRESS_SUCCESS      = 'NEW_ADDRESS_SUCCESS';
export const NEW_ADDRESS_FAIL         = 'NEW_ADDRESS_FAIL';
export const NEW_ADDRESS              = 'NEW_ADDRESS';


export const SET_AUTH_REDIRECT_PATH   = 'SET_AUTH_REDIRECT_PATH';
export const SET_CONTACTS             = 'SET_CONTACTS';


/*******************************************
********************************************
 * Store
********************************************
*******************************************/

export const CHECKOUT                 = 'CHECKOUT';
export const CHECKOUT_START           = 'CHECKOUT_START';
export const CHECKOUT_SUCCESS         = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAIL            = 'CHECKOUT_FAIL';


/*******************************************
********************************************
 * Orders
********************************************
*******************************************/

export const FETCH_ORDERS             = 'FETCH_ORDERS';
export const FETCH_ORDERS_START       = 'FETCH_ORDERS_START';
export const FETCH_ORDERS_SUCCESS     = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL        = 'FETCH_ORDERS_FAIL';
export const ORDER_BY                 = 'ORDER_BY';


/*******************************************
********************************************
 * Blog
********************************************
*******************************************/

export const NEW_POST_START = 'NEW_POST_START';
export const NEW_POST_SUCCESS = 'NEW_POST_SUCCESS';
export const NEW_POST_FAIL = 'NEW_POST_FAIL';
export const NEW_POST = 'NEW_POST';

export const SET_NEW_POST_REDIRECT_PATH = 'SET_NEW_POST_REDIRECT_PATH';

export const NEW_POST_INIT = 'NEW_POST_INIT';

export const DELETE_POST_START = 'DELETE_POST_START';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';
export const DELETE_POST = 'DELETE_POST';

export const UPDATE_POST_START = 'UPDATE_POST_START';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAIL = 'UPDATE_POST_FAIL';
export const UPDATE_POST = 'UPDATE_POST';

export const FETCH_POSTS_START = 'FETCH_POSTS_START';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';
export const FETCH_POSTS = 'FETCH_POSTS';

export const FETCH_POSTS_BY_ID_START = 'FETCH_POSTS_BY_ID_START';
export const FETCH_POSTS_BY_ID_SUCCESS = 'FETCH_POSTS_BY_ID_SUCCESS';
export const FETCH_POSTS_BY_ID_FAIL = 'FETCH_POSTS_BY_ID_FAIL';
export const FETCH_POSTS_BY_ID = 'FETCH_POSTS_BY_ID';

export const FETCH_POSTS_BY_YEAR_START = 'FETCH_POSTS_BY_YEAR_START';
export const FETCH_POSTS_BY_YEAR_SUCCESS = 'FETCH_POSTS_BY_YEAR_SUCCESS';
export const FETCH_POSTS_BY_YEAR_FAIL = 'FETCH_POSTS_BY_YEAR_FAIL';
export const FETCH_POSTS_BY_YEAR = 'FETCH_POSTS_BY_YEAR';

export const FETCH_POSTS_BY_MONTH_START = 'FETCH_POSTS_BY_MONTH_START';
export const FETCH_POSTS_BY_MONTH_SUCCESS = 'FETCH_POSTS_BY_MONTH_SUCCESS';
export const FETCH_POSTS_BY_MONTH_FAIL = 'FETCH_POSTS_BY_MONTH_FAIL';
export const FETCH_POSTS_BY_MONTH = 'FETCH_POSTS_BY_MONTH';


/*******************************************
********************************************
 * Comments
********************************************
*******************************************/

export const POST_COMMENT_START        = 'POST_COMMENT_START';
export const POST_COMMENT_SUCCESS      = 'POST_COMMENT_SUCCESS';
export const POST_COMMENT_FAIL         = 'POST_COMMENT_FAIL';
export const POST_COMMENT              = 'POST_COMMENT';

export const DELETE_COMMENT_START      = 'DELETE_COMMENT_START';
export const DELETE_COMMENT_SUCCESS    = 'DELETE_COMMENT_SUCCESS';
export const DELETE_COMMENT_FAIL       = 'DELETE_COMMENT_FAIL';
export const DELETE_COMMENT            = 'DELETE_COMMENT';

export const UPDATE_COMMENT_START      = 'UPDATE_COMMENT_START';
export const UPDATE_COMMENT_SUCCESS    = 'UPDATE_COMMENT_SUCCESS';
export const UPDATE_COMMENT_FAIL       = 'UPDATE_COMMENT_FAIL';
export const UPDATE_COMMENT            = 'UPDATE_COMMENT';

export const GET_COMMENTS_START         = 'GET_COMMENTS_START';
export const GET_COMMENTS_SUCCESS       = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAIL          = 'GET_COMMENTS_FAIL';
export const GET_COMMENTS               = 'GET_COMMENTS';
