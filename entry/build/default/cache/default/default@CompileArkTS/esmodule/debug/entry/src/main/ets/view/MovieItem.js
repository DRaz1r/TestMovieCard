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
import router from '@ohos:router';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
import CommonConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import StarsWidget from '@bundle:com.huawei.moviecard/entry/ets/view/StarsWidget';
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import { Collect } from '@bundle:com.huawei.moviecard/entry/ets/view/Collect';
export default class MovieItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.movieItem = undefined;
        this.sort = undefined;
        this.isShowSort = undefined;
        this.sortImage = undefined;
        this.title = undefined;
        this.describe = undefined;
        this.movieImage = undefined;
        this.stars = undefined;
        this.rating = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.movieItem !== undefined) {
            this.movieItem = params.movieItem;
        }
        if (params.sort !== undefined) {
            this.sort = params.sort;
        }
        if (params.isShowSort !== undefined) {
            this.isShowSort = params.isShowSort;
        }
        if (params.sortImage !== undefined) {
            this.sortImage = params.sortImage;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.describe !== undefined) {
            this.describe = params.describe;
        }
        if (params.movieImage !== undefined) {
            this.movieImage = params.movieImage;
        }
        if (params.stars !== undefined) {
            this.stars = params.stars;
        }
        if (params.rating !== undefined) {
            this.rating = params.rating;
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
        if (CommonUtils.isEmpty(this.movieItem)) {
            Logger.error(CommonConstants.TAG_MOVIE_ITEM, 'movieItem is null');
            return;
        }
        this.sort = this.movieItem.sort;
        this.isShowSort = this.movieItem.isShowSort;
        this.sortImage = this.movieItem.sortImage;
        this.title = this.movieItem.title;
        this.describe = this.movieItem.describe;
        this.movieImage = this.movieItem.movieImage;
        this.stars = this.movieItem.stars;
        this.rating = this.movieItem.rating;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.borderRadius({ "id": 16777385, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.margin({
                left: { "id": 16777384, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777386, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            Row.width(StyleConstants.ITEM_WIDTH);
            Row.height({ "id": 16777383, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.TopStart });
            Stack.margin({ left: { "id": 16777424, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.movieImage);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius({ "id": 16777425, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width({ "id": 16777426, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777423, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isShowSort) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create(this.sortImage);
                        Image.width({ "id": 16777465, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        Image.height({ "id": 16777465, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                If.branchId(1);
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Stack.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.layoutWeight(StyleConstants.WEIGHT_ONE);
            Column.margin({
                left: { "id": 16777351, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777352, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.title);
            Text.fontSize({ "id": 16777427, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor({ "id": 16777317, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new StarsWidget(this, {
                        rating: this.rating,
                        stars: this.stars
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.describe);
            Text.fontSize({ "id": 16777355, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777317, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity({ "id": 16777349, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777312, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            Text.fontSize({ "id": 16777441, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.fontColor(Color.White);
            Text.borderRadius({ "id": 16777439, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.backgroundColor({ "id": 16777332, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.margin({ right: { "id": 16777440, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Text.width({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.height({ "id": 16777437, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.onClick(() => {
                router.pushUrl({
                    url: CommonConstants.SEE_BUTTON_PUSH,
                    params: {
                        index: this.sort
                    }
                }).catch((error) => {
                    Logger.error(CommonConstants.TAG_MOVIE_ITEM, 'push error ' + JSON.stringify(error));
                });
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new 
                    // 按钮-收藏
                    Collect(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=MovieItem.js.map