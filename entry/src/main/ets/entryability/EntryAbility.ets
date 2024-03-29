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

import UIAbility from '@ohos.app.ability.UIAbility';
import AbilityConstant from '@ohos.app.ability.AbilityConstant';
import Want from '@ohos.app.ability.Want';
import Window from '@ohos.window';
import CommonConstants from '../common/constants/CommonConstants';
import CommonUtils from '../common/utils/CommonUtils';
import Logger from '../common/utils/Logger';
import hilog from '@ohos.hilog';
import PreferencesUtil from '../common/utils/PreferencesUtil';
import { MOVIE_LIST_DATA } from '../common/datasource/MovieListData';
import MovieDataBean from '../common/bean/MovieDataBean';

/**
 * Lift cycle management of Ability.
 */
export default class EntryAbility extends UIAbility {

  onCreate(want, launchParam) {

    //******创建首选项数据库
    Logger.info('[entryAbility]', 'onCreate');
    globalThis.abilityWant = want;

    // 创建首选项数据库
    PreferencesUtil.createCollectPreferences(this.context);
    // 循环设置所有不同名称电影收藏为false
    MOVIE_LIST_DATA.forEach((itemMovie) => {
      let movieItem: MovieDataBean = {
        sort: itemMovie.sort,
        isShowSort: itemMovie.isShowSort,
        sortImage: itemMovie.sortImage,
        title: itemMovie.title,
        describe: itemMovie.describe,
        movieImage: itemMovie.movieImage,
        cardImage: itemMovie.cardImage,
        stars: itemMovie.stars,
        rating: itemMovie.rating,
        introduction: itemMovie.introduction,
        weburl: itemMovie.weburl
      }

      PreferencesUtil.saveDefaultCollect(movieItem.title,false)

    })
    //******



    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    hilog.info(0x0000, 'testTag', '%{public}s', 'want param:' + JSON.stringify(want) ?? '');
    hilog.info(0x0000, 'testTag', '%{public}s', 'launchParam:' + JSON.stringify(launchParam) ?? '');
  }

  onDestroy() {
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: Window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/LauncherPage', (err, data) => {
      if (err.code) {
        hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.ERROR);
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content. Data: %{public}s', JSON.stringify(data) ?? '');
    });
  }

  onWindowStageDestroy() {
    // Main window is destroyed, release UI related resources
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground() {
    // Ability has brought to foreground
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground() {
    // Ability has back to background
    hilog.isLoggable(0x0000, 'testTag', hilog.LogLevel.INFO);
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }


}
