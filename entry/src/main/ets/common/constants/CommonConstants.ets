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

import relationalStore from '@ohos.data.relationalStore';

/**
 * Transition animation duration.
 */
export const TRANSITION_ANIMATION_DURATION: number = 600;

/**
 * Custom transition opacity.
 */
export const CUSTOM_TRANSITION_OPACITY = 0.2;

/**
 * Custom transition scale.
 */
export const CUSTOM_TRANSITION_SCALE = { x: 0, y: 0 };

/**
 * Custom transition translate.
 */
export const CUSTOM_TRANSITION_TRANSLATE = { x: 500, y: 500 };

export const SECOND_PAGE: string = 'pages/SimpleVideoPlay';

/**
 * route param
 */
export const SOURCE: string = 'source';

/**
 * video net address
 */
export const NET: string = '网络视频地址*****';

/**
 * toast message
 */
export const MESSAGE: string = '请检查网络';

/**
 * init time of string
 */
export const START_TIME: string = '00:00';

/**
 * video net address
 */
export const ZERO_STR: string = '0';

/**
 * time split
 */
export const SPLIT: string = ':';

/**
 * default opacity
 */
export const DEFAULT_OPACITY: number = parseFloat('0.2');

/**
 * slider small track thick ness
 */
export const SMALL_TRACK_THICK_NESS: number = 2;

/**
 * slider big track thick ness
 */
export const BIG_TRACK_THICK_NESS: number = 4;

/**
 * the divide of single and double
 */
export const COMMON_NUM_DOUBLE: number = 10;

/**
 * the minute of one hour
 */
export const COMMON_NUM_MINUTE: number = 60;

/**
 * common font weight
 */
export const COMMON_NUM_FONT_WEIGHT: number = 500;

/**
 * toast duration
 */
export const COMMON_NUM_DURATION: number = 5000;

/**
 * module list
 */
export const LIST: string[] = ['最近播放', '为你推荐'];

/**
 * full percent
 */
export const ALL_PERCENT: string = '100%';

/**
 * Image Size
 */
export const IMAGE_SIZE: number = 24;

/**
 * component with or height percent
 */
export const enum STRING_PERCENT {
  SLIDER_WITH = '56.7%',
  NINETY_PERCENT = '90%',
  INDEX_COMPONENT_WITH_PERCENT = '93.3%',
  INDEX_SWIPER_HEIGHT_PERCENT = '24.1%',
  INDEX_MODULE_HEIGHT_PERCENT = '22.8%',
  INDEX_SWIPER_LEFT_RIGHT_MARGIN = '3.3%'
};

/**
 * margin or font size
 */
export const enum MARGIN_FONT_SIZE {
  FIRST_MARGIN = 12,
  SECOND_MARGIN = 16,
  THIRD_MARGIN = 18,
  FOURTH_MARGIN = 24,
  FIFTH_MARGIN = 50,
  SIXTH_MARGIN = 94,
  SEVENTH_MARGIN = 132
};

/**
 * video resource type
 */
export const enum VIDEO_TYPE {
  INNER = 'inner',
  NET = 'net'
};

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
}
/**
 * Common constants for all features.
 */
export default class CommonConstants {
  /**
   * Launcher page count down.
   */
  static readonly LAUNCHER_DELAY_TIME: number = 3000;
  /**
   * Advertising page url.
   */
  static readonly ADVERTISING_PAGE_URL: string = 'pages/AdvertisingPage';

  /**
   * Display countdown seconds.
   */
  static readonly ADVERTISING_COUNT_DOWN_SECONDS: number = 2;
  /**
   * Interval execution time.
   */
  static readonly ADVERTISING_INTERVAL_TIME: number = 1000;
  /**
   * The advertsing page tag.
   */
  static readonly ADVERTISING_PAGE_TAG: string = 'AdvertisingPage';

  /**
   * App home page url.
   */
  static readonly APP_HOME_PAGE_URL: string = 'pages/LoginPage';

  /**
   * Count down text spacing.
   */
  static readonly ADVERTISING_TITLE_TEXT_LETTER_SPACING: number = 0.05;

  /**
   * Preference saved file name.
   */
  static readonly PREFERENCES_FILE_NAME: string = 'myStore';

  /**
   * Healthy living text spacing.
   */
  static readonly LAUNCHER_LIFE_TEXT_SPACING: number = 0.1;

  /**
   * Healthy living title text top margin.
   */
  static readonly LAUNCHER_TEXT_TITLE_MARGIN_TOP: string = '0.5%';

  /**
   * Content control height.
   */
  static readonly LAUNCHER_TEXT_INTRODUCE_HEIGHT: string = '2.7%';

  /**
   * Healthy living instructions.
   */
  static readonly LAUNCHER_TEXT_INTRODUCE_SPACING: number = 3.4;

  /**
   * Healthy living content top margin.
   */
  static readonly LAUNCHER_TEXT_INTRODUCE_MARGIN_TOP: string = '1.3%';

  /**
   * Image logo top margin.
   */
  static readonly LAUNCHER_IMAGE_MARGIN_TOP: string = '16.2%';

  /**
   * Width the percentage of the 100.
   */
  static readonly FULL_WIDTH: string = '100%';

  /**
   * Height the percentage of the 100.
   */
  static readonly FULL_HEIGHT: string = '100%';

  /**
   * Preference saved key.
   */
  static readonly PREFERENCES_KEY_PRIVACY: string = 'isPrivacy';

  /**
   * The launcher page tag.
   */
  static readonly LAUNCHER_PAGE_TAG: string = 'LauncherPage';

  /**
   * Dialog y-axis offset distance.
   */
  static readonly DIALOG_CONTROLLER_DY_OFFSET: number = -24;

  /**
   * Dialog width the percentage of the 93.3.
   */
  static readonly DIALOG_WIDTH_PERCENT: string = '93.3%';

  /**
   * Dialog border radius.
   */
  static readonly DIALOG_BORDER_RADIUS: number = 24;

  /**
   * Common layout weight.
   */
  static readonly COMMON_LAYOUT_WEIGHT: number = 1;

  /**
   * Dialog component bottom margin,
   */
  static readonly DIALOG_ROW_MARGIN_BOTTOM: string = '3.1%';

  /**
   * The custom dialog component tag.
   */
  static readonly CUSTOM_DIALOG_TAG: string = 'CustomDialogComponent';

  /**
   * Privacy page url.
   */
  static readonly PRIVACY_PAGE_URL: string = 'pages/PrivacyPage';

  /**
   * Dialog title text weight.
   */

  static readonly DIALOG_TITLE_FONT_WEIGHT: number = 600;
  /**
   * Dialog component width the percentage of the 90.
   */
  static readonly DIALOG_COMPONENT_WIDTH_PERCENT: string = '90%';

  /**
   * Break point sm of the tag.
   */

  static readonly SM: string = 'sm';

  /**
   * Break point md of the tag.
   */
  static readonly MD: string = 'md';

  /**
   * Break point lg of the tag.
   */
  static readonly LG: string = 'lg';
  /**
   * Login text.
   */
  static readonly LOGIN_TEXT: string = 'login';
  /**
   * Main page url.
   */
  static readonly MAIN_PAGE_URL: string = 'pages/MainPage';

  /**
   * Login page url.
   */
  static readonly LOGIN_PAGE_URL: string = 'pages/LoginPage';
  /**
   * Login page button id.
   */
  static readonly LOGIN_BUTTON_ID: string = 'loginButtonId';

  /**
   * The entry ability tag.
   */
  static readonly TAG_ABILITY: string = 'EntryAbility';

  /**
   * The entry details ability tag.
   */
  static readonly TAG_DETAILS: string = 'EntryDetailsAbility';

  /**
   * The movie list page tag.
   */
  static readonly TAG_MOVIE_LIST: string = 'MovieListPage';

  /**
   * The movie details page tag.
   */
  static readonly TAG_DETAILS_PAGE: string = 'MovieDetailsPage';

  /**
   * The entry form ability tag.
   */
  static readonly TAG_FORM_ABILITY: string = 'EntryFormAbility';

  /**
   * The movie item component tag.
   */
  static readonly TAG_MOVIE_ITEM: string = 'MovieItem';

  /**
   * The movie details item component tag.
   */
  static readonly TAG_DETAILS_COMPONENT: string = 'MovieDetailTitle';

  /**
   *  The common utils tag.
   */
  static readonly TAG_COMMON_UTILS: string = 'CommonUtils';

  /**
   * Database store configuration.
   */
  static readonly STORE_CONFIG: relationalStore.StoreConfig = {
    name: 'FormDatabase.db', securityLevel: relationalStore.SecurityLevel.S1, encrypt: false
  };

  /**
   * SQL statement for creating a form.
   */
  static readonly CREATE_TABLE_FORM: string = 'CREATE TABLE IF NOT EXISTS Form ' +
    '(id INTEGER PRIMARY KEY AUTOINCREMENT, formId TEXT NOT NULL, formName TEXT NOT NULL, dimension INTEGER)';

  /**
   * ID parameter for creating a form.
   */
  static readonly IDENTITY_KEY: string = 'ohos.extra.param.key.form_identity';

  /**
   * Name parameter for creating a form.
   */
  static readonly NAME_KEY: string = 'ohos.extra.param.key.form_name';

  /**
   * Dimension parameter for creating a form.
   */
  static readonly DIMENSION_KEY: string = 'ohos.extra.param.key.form_dimension';

  /**
   * Table name
   */
  static readonly TABLE_NAME: string = 'Form';

  /**
   * Refresh time in 5 minute.
   */
  static readonly FIVE_MINUTES: number = 5;

  /**
   * Form ID field in the database table.
   */
  static readonly FORM_ID: string = 'formId';

  /**
   * Time interval of the 300000.
   */
  static readonly INTERVAL_DELAY_TIME: number = 300000;

  /**
   * Notification id of the 1008.
   */
  static readonly NOTIFICATIONS_ID: number = 1008;

  /**
   * Random multiply ten.
   */
  static readonly MULTIPLY_TEN: number = 10;

  /**
   * Random minus two.
   */
  static readonly MINUS_TWO: number = 2;

  /**
   * Default lines of the 5.
   */
  static readonly DEFAULT_LINES: number = 5;

  /**
   * Max lines of the 10.
   */
  static readonly MAX_LINES: number = 10;

  /**
   * Index key
   */
  static readonly INDEX_KEY: string = 'index';

  /**
   * See button push page url.
   */
  static readonly SEE_BUTTON_PUSH: string = 'pages/MovieDetailsPage';


  /**
   * Input length of the account.
   */
  static readonly INPUT_ACCOUNT_LENGTH = 11;

  /**
   *  Input length of the password.
   */
  static readonly INPUT_PASSWORD_LENGTH = 8;

  /**
   *  Left padding of the input box
   */
  static readonly INPUT_PADDING_LEFT = 0;

  /**
   * Delay time of simulated login
   */
  static readonly LOGIN_DELAY_TIME = 2000;

  /**
   * Common Spacing of Components
   */
  static readonly COMMON_SPACE = 12;

  /**
   * Title text of the home page
   */
  static readonly HOME_TITLE = '首页';

  /**
   * Toast duration.
   */
  static readonly TOAST_DURATION: number = 3000;

  /**
   * Title text of the setting page
   */
  static readonly MINE_TITLE = '我的';

  /**
   * Spacing of other login methods
   */
  static readonly LOGIN_METHODS_SPACE = 44;

  /**
   * The width or height of the component is spread across the parent component.
   */
  static readonly FULL_PARENT = '100%';

  /**
   * The width of button
   */
  static readonly BUTTON_WIDTH = '90%';

  /**
   * Home tab index
   */
  static readonly HOME_TAB_INDEX = 0;

  /**
   * Mine tab index
   */
  static readonly MINE_TAB_INDEX = 1;



}

