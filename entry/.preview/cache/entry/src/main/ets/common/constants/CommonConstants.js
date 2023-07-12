/*
 * Copyright (c) 2023 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import relationalStore from '@ohos:data.relationalStore';
export const SECOND_PAGE = 'pages/SimpleVideoPlay';
/**
 * route param
 */
export const SOURCE = 'source';
/**
 * video net address
 */
export const NET = '网络视频地址*****';
/**
 * toast message
 */
export const MESSAGE = '请检查网络';
/**
 * init time of string
 */
export const START_TIME = '00:00';
/**
 * video net address
 */
export const ZERO_STR = '0';
/**
 * time split
 */
export const SPLIT = ':';
/**
 * default opacity
 */
export const DEFAULT_OPACITY = parseFloat('0.2');
/**
 * slider small track thick ness
 */
export const SMALL_TRACK_THICK_NESS = 2;
/**
 * slider big track thick ness
 */
export const BIG_TRACK_THICK_NESS = 4;
/**
 * the divide of single and double
 */
export const COMMON_NUM_DOUBLE = 10;
/**
 * the minute of one hour
 */
export const COMMON_NUM_MINUTE = 60;
/**
 * common font weight
 */
export const COMMON_NUM_FONT_WEIGHT = 500;
/**
 * toast duration
 */
export const COMMON_NUM_DURATION = 5000;
/**
 * module list
 */
export const LIST = ['最近播放', '为你推荐'];
/**
 * full percent
 */
export const ALL_PERCENT = '100%';
/**
 * Image Size
 */
export const IMAGE_SIZE = 24;
;
;
;
/**
 * Attribute Styles in a Stack Layout
 */
export const STACK_STYLE = {
    IMAGE_Z_INDEX: 2,
    PROGRESS_VALUE: 0,
    PROGRESS_TOTAL: 100,
    PROGRESS_STROKE_WIDTH: 15,
    PROGRESS_SCALE_COUNT: 15,
    PROGRESS_SCALE_WIDTH: 5,
    PROGRESS_Z_INDEX: 1,
    PROGRESS_WIDTH: 80,
    PROGRESS_STEP: 10,
    MILLI_SECONDS: 100
};
/**
 * Common constants for all features.
 */
export default class CommonConstants {
}
/**
 * Break point sm of the tag.
 */
CommonConstants.SM = 'sm';
/**
 * Break point md of the tag.
 */
CommonConstants.MD = 'md';
/**
 * Break point lg of the tag.
 */
CommonConstants.LG = 'lg';
/**
 * Login text.
 */
CommonConstants.LOGIN_TEXT = 'login';
/**
 * Main page url.
 */
CommonConstants.MAIN_PAGE_URL = 'pages/MainPage';
/**
 * Login page url.
 */
CommonConstants.LOGIN_PAGE_URL = 'pages/LoginPage';
/**
 * Login page button id.
 */
CommonConstants.LOGIN_BUTTON_ID = 'loginButtonId';
/**
 * The entry ability tag.
 */
CommonConstants.TAG_ABILITY = 'EntryAbility';
/**
 * The entry details ability tag.
 */
CommonConstants.TAG_DETAILS = 'EntryDetailsAbility';
/**
 * The movie list page tag.
 */
CommonConstants.TAG_MOVIE_LIST = 'MovieListPage';
/**
 * The movie details page tag.
 */
CommonConstants.TAG_DETAILS_PAGE = 'MovieDetailsPage';
/**
 * The entry form ability tag.
 */
CommonConstants.TAG_FORM_ABILITY = 'EntryFormAbility';
/**
 * The movie item component tag.
 */
CommonConstants.TAG_MOVIE_ITEM = 'MovieItem';
/**
 * The movie details item component tag.
 */
CommonConstants.TAG_DETAILS_COMPONENT = 'MovieDetailTitle';
/**
 *  The common utils tag.
 */
CommonConstants.TAG_COMMON_UTILS = 'CommonUtils';
/**
 * Database store configuration.
 */
CommonConstants.STORE_CONFIG = {
    name: 'FormDatabase.db', securityLevel: relationalStore.SecurityLevel.S1, encrypt: false
};
/**
 * SQL statement for creating a form.
 */
CommonConstants.CREATE_TABLE_FORM = 'CREATE TABLE IF NOT EXISTS Form ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, formId TEXT NOT NULL, formName TEXT NOT NULL, dimension INTEGER)';
/**
 * ID parameter for creating a form.
 */
CommonConstants.IDENTITY_KEY = 'ohos.extra.param.key.form_identity';
/**
 * Name parameter for creating a form.
 */
CommonConstants.NAME_KEY = 'ohos.extra.param.key.form_name';
/**
 * Dimension parameter for creating a form.
 */
CommonConstants.DIMENSION_KEY = 'ohos.extra.param.key.form_dimension';
/**
 * Table name
 */
CommonConstants.TABLE_NAME = 'Form';
/**
 * Refresh time in 5 minute.
 */
CommonConstants.FIVE_MINUTES = 5;
/**
 * Form ID field in the database table.
 */
CommonConstants.FORM_ID = 'formId';
/**
 * Time interval of the 300000.
 */
CommonConstants.INTERVAL_DELAY_TIME = 300000;
/**
 * Notification id of the 1008.
 */
CommonConstants.NOTIFICATIONS_ID = 1008;
/**
 * Random multiply ten.
 */
CommonConstants.MULTIPLY_TEN = 10;
/**
 * Random minus two.
 */
CommonConstants.MINUS_TWO = 2;
/**
 * Default lines of the 5.
 */
CommonConstants.DEFAULT_LINES = 5;
/**
 * Max lines of the 10.
 */
CommonConstants.MAX_LINES = 10;
/**
 * Index key
 */
CommonConstants.INDEX_KEY = 'index';
/**
 * See button push page url.
 */
CommonConstants.SEE_BUTTON_PUSH = 'pages/MovieDetailsPage';
/**
 * Input length of the account.
 */
CommonConstants.INPUT_ACCOUNT_LENGTH = 11;
/**
 *  Input length of the password.
 */
CommonConstants.INPUT_PASSWORD_LENGTH = 8;
/**
 *  Left padding of the input box
 */
CommonConstants.INPUT_PADDING_LEFT = 0;
/**
 * Delay time of simulated login
 */
CommonConstants.LOGIN_DELAY_TIME = 2000;
/**
 * Common Spacing of Components
 */
CommonConstants.COMMON_SPACE = 12;
/**
 * Title text of the home page
 */
CommonConstants.HOME_TITLE = '首页';
/**
 * Toast duration.
 */
CommonConstants.TOAST_DURATION = 3000;
/**
 * Title text of the setting page
 */
CommonConstants.MINE_TITLE = '我的';
/**
 * Spacing of other login methods
 */
CommonConstants.LOGIN_METHODS_SPACE = 44;
/**
 * The width or height of the component is spread across the parent component.
 */
CommonConstants.FULL_PARENT = '100%';
/**
 * The width of button
 */
CommonConstants.BUTTON_WIDTH = '90%';
/**
 * Home tab index
 */
CommonConstants.HOME_TAB_INDEX = 0;
/**
 * Mine tab index
 */
CommonConstants.MINE_TAB_INDEX = 1;
//# sourceMappingURL=CommonConstants.js.map