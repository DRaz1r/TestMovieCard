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
import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import DataSource from '@bundle:com.huawei.moviecard/entry/ets/common/datasource/DataSource';
import MovieItem from '@bundle:com.huawei.moviecard/entry/ets/view/MovieItem';
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import mainViewModel from '@bundle:com.huawei.moviecard/entry/ets/viewmodel/MainViewModel';
export class MovieListPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.dataSource = undefined;
        this.swiperController = new SwiperController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.dataSource !== undefined) {
            this.dataSource = params.dataSource;
        }
        if (params.swiperController !== undefined) {
            this.swiperController = params.swiperController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    aboutToAppear() {
        this.dataSource = new DataSource(CommonUtils.getListData());
        // Start the timer and update the card data every 10 seconds.
        CommonUtils.startTimer();
    }
    aboutToDisappear() {
        clearInterval(globalThis.intervalId);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.debugLine("pages/MovieListPage.ets(46:5)");
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MovieListPage.ets(47:7)");
            Column.backgroundColor({ "id": 16777346, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.width(StyleConstants.FULL_WIDTH);
            Column.height(StyleConstants.FULL_HEIGHT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 文本-热门电影预览
            Text.create('热门电影预览');
            Text.debugLine("pages/MovieListPage.ets(50:9)");
            // 文本-热门电影预览
            Text.fontWeight(FontWeight.Bolder);
            // 文本-热门电影预览
            Text.fontSize({ "id": 16777427, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            // 文本-热门电影预览
            Text.alignSelf(ItemAlign.Start);
            // 文本-热门电影预览
            Text.margin({
                left: StyleConstants.COMMON_MARGIN_LEFT,
                top: StyleConstants.COMMON_MARGIN_TOP,
                bottom: StyleConstants.LIST_TITLE_MARGIN
            });
            // 文本-热门电影预览
            Text.height({ "id": 16777426, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                // 文本-热门电影预览
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 文本-热门电影预览
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 滚动-电影海报
            Swiper.create(this.swiperController);
            Swiper.debugLine("pages/MovieListPage.ets(62:9)");
            // 滚动-电影海报
            Swiper.margin({ top: '20vp' });
            // 滚动-电影海报
            Swiper.margin({ bottom: '20vp' });
            // 滚动-电影海报
            Swiper.autoPlay(true);
            // 滚动-电影海报
            Swiper.width(StyleConstants.ITEM_WIDTH);
            // 滚动-电影海报
            Swiper.height({ "id": 16777419, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                // 滚动-电影海报
                Swiper.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const img = _item;
                this.observeComponentCreation((elmtId, isInitialRender) => {
                    ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                    Image.create(img);
                    Image.debugLine("pages/MovieListPage.ets(64:13)");
                    Image.borderRadius({ "id": 16777409, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                    if (!isInitialRender) {
                        Image.pop();
                    }
                    ViewStackProcessor.StopGetAccessRecording();
                });
            };
            this.forEachUpdateFunction(elmtId, mainViewModel.getSwiperImages(), forEachItemGenFunction, img => img.id, false, false);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        // 滚动-电影海报
        Swiper.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 文本-热门电影排行
            Text.create({ "id": 16777242, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.debugLine("pages/MovieListPage.ets(75:9)");
            // 文本-热门电影排行
            Text.fontWeight(FontWeight.Bolder);
            // 文本-热门电影排行
            Text.fontSize({ "id": 16777427, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            // 文本-热门电影排行
            Text.alignSelf(ItemAlign.Start);
            // 文本-热门电影排行
            Text.margin({
                left: StyleConstants.COMMON_MARGIN_LEFT,
                top: StyleConstants.COMMON_MARGIN_TOP,
                bottom: StyleConstants.LIST_TITLE_MARGIN
            });
            // 文本-热门电影排行
            Text.height({ "id": 16777426, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                // 文本-热门电影排行
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        // 文本-热门电影排行
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            // 电影列表
            List.create({ space: StyleConstants.LIST_COMPONENT_SPACE });
            List.debugLine("pages/MovieListPage.ets(87:9)");
            // 电影列表
            List.listDirection(Axis.Vertical);
            // 电影列表
            List.edgeEffect(EdgeEffect.None);
            // 电影列表
            List.layoutWeight(StyleConstants.WEIGHT_ONE);
            // 电影列表
            List.width(StyleConstants.FULL_WIDTH);
            // 电影列表
            List.height(StyleConstants.FULL_HEIGHT);
            if (!isInitialRender) {
                // 电影列表
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            const __lazyForEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = (globalThis.__lazyForEachItemGenFunction !== undefined) && true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("pages/MovieListPage.ets(89:13)");
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const observedShallowRender = () => {
                        this.observeComponentCreation(itemCreation);
                        ListItem.pop();
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation(itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        {
                            this.observeComponentCreation((elmtId, isInitialRender) => {
                                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                                if (isInitialRender) {
                                    ViewPU.create(new MovieItem(this, { movieItem: item }, undefined, elmtId));
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                                }
                                ViewStackProcessor.StopGetAccessRecording();
                            });
                        }
                        ListItem.pop();
                    };
                    if (isLazyCreate) {
                        observedShallowRender();
                    }
                    else {
                        observedDeepRender();
                    }
                }
            };
            const __lazyForEachItemIdFunc = item => JSON.stringify(item);
            LazyForEach.create("1", this, this.dataSource, __lazyForEachItemGenFunction, __lazyForEachItemIdFunc);
            LazyForEach.pop();
        }
        // 电影列表
        List.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=MovieListPage.js.map