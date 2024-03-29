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

import StyleConstants from '../common/constants/StyleConstants';
import DataSource from '../common/datasource/DataSource';
import MovieDataBean from '../common/bean/MovieDataBean';
import MovieItem from '../view/MovieItem';
import CommonUtils from '../common/utils/CommonUtils';
import mainViewModel from '../viewmodel/MainViewModel';
/**
 * MovieListPage is the program entry and displays movie ranking data.
 * The message is displayed on the notification bar. The card data can be updated normally.
 * Developers can open the notification bar.
 */
@Component
export struct MovieListPage {
  // Lazy loading of matching data sources.
  private dataSource: DataSource<MovieDataBean>;

  private swiperController: SwiperController = new SwiperController();


  aboutToAppear() {
    this.dataSource = new DataSource(CommonUtils.getListData());
    // Start the timer and update the card data every 10 seconds.
    CommonUtils.startTimer();
  }

  aboutToDisappear() {
    clearInterval(globalThis.intervalId);
  }

  build() {
    Scroll(){
      Column() {

        // 文本-热门电影预览
        Text('热门电影预览')
          .fontWeight(FontWeight.Bolder)
          .fontSize($r('app.float.list_title_size'))
          .alignSelf(ItemAlign.Start)
          .margin({
            left: StyleConstants.COMMON_MARGIN_LEFT,
            top: StyleConstants.COMMON_MARGIN_TOP,
            bottom: StyleConstants.LIST_TITLE_MARGIN
          })
          .height($r('app.float.list_title_height'))

        // 滚动-电影海报
        Swiper(this.swiperController) {
          ForEach(mainViewModel.getSwiperImages(), (img: Resource) => {
            Image(img).borderRadius($r('app.float.home_swiper_borderRadius'))

          }, img => img.id)
        }
        .margin({ top: '20vp' })
        .margin({ bottom : '20vp'} )
        .autoPlay(true)
        .width(StyleConstants.ITEM_WIDTH)
        .height($r('app.float.swiper_height'))

        // 文本-热门电影排行
        Text($r('app.string.list_page_title'))
          .fontWeight(FontWeight.Bolder)
          .fontSize($r('app.float.list_title_size'))
          .alignSelf(ItemAlign.Start)
          .margin({
            left: StyleConstants.COMMON_MARGIN_LEFT,
            top: StyleConstants.COMMON_MARGIN_TOP,
            bottom: StyleConstants.LIST_TITLE_MARGIN
          })
          .height($r('app.float.list_title_height'))

        // 电影列表
        List({ space: StyleConstants.LIST_COMPONENT_SPACE }) {
          LazyForEach(this.dataSource, (item: MovieDataBean) => {
            ListItem() {
              MovieItem({ movieItem: item });
            }
          }, item => JSON.stringify(item))
        }
        .listDirection(Axis.Vertical)
        .edgeEffect(EdgeEffect.None)
        .layoutWeight(StyleConstants.WEIGHT_ONE)
        .width(StyleConstants.FULL_WIDTH)
        .height(StyleConstants.FULL_HEIGHT)
      }
      .backgroundColor($r('app.color.common_background_color'))
      .width(StyleConstants.FULL_WIDTH)
      .height(StyleConstants.FULL_HEIGHT)
    }
    }

}