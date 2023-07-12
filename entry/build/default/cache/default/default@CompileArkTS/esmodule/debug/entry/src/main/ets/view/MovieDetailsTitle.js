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
import CommonConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import StarsWidget from '@bundle:com.huawei.moviecard/entry/ets/view/StarsWidget';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
import router from '@ohos:router';
export default class MovieDetailsTitle extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.movieDetail = undefined;
        this.movieImage = undefined;
        this.title = undefined;
        this.rating = undefined;
        this.stars = undefined;
        this.describe = undefined;
        this.weburl = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.movieDetail !== undefined) {
            this.movieDetail = params.movieDetail;
        }
        if (params.movieImage !== undefined) {
            this.movieImage = params.movieImage;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.rating !== undefined) {
            this.rating = params.rating;
        }
        if (params.stars !== undefined) {
            this.stars = params.stars;
        }
        if (params.describe !== undefined) {
            this.describe = params.describe;
        }
        if (params.weburl !== undefined) {
            this.weburl = params.weburl;
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
        if (CommonUtils.isEmpty(this.movieDetail)) {
            Logger.error(CommonConstants.TAG_DETAILS_COMPONENT, 'movieDetail is null');
            return;
        }
        this.movieImage = this.movieDetail.movieImage;
        this.title = this.movieDetail.title;
        this.rating = this.movieDetail.rating;
        this.stars = this.movieDetail.stars;
        this.describe = this.movieDetail.describe;
        this.weburl = this.movieDetail.weburl;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.movieImage);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius({ "id": 16777488, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.margin({ left: StyleConstants.COMMON_MARGIN_LEFT });
            Image.width({ "id": 16777489, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777487, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.layoutWeight(StyleConstants.WEIGHT_ONE);
            Column.margin({ left: { "id": 16777438, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.title);
            Text.fontSize({ "id": 16777490, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
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
            Text.fontSize({ "id": 16777354, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777317, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity({ "id": 16777349, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.margin({ right: StyleConstants.COMMON_MARGIN_LEFT, bottom: { "id": 16777353, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('100%');
            if (!isInitialRender) {
                Row.pop();
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
            Text.alignSelf(ItemAlign.Start);
            Text.backgroundColor({ "id": 16777332, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.width({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.height({ "id": 16777437, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.margin({ right: '10vp', left: '10vp' });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(('购票'));
            Text.fontWeight(FontWeight.Bolder);
            Text.fontSize({ "id": 16777441, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.fontColor(Color.White);
            Text.borderRadius({ "id": 16777439, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.backgroundColor(Color.Pink);
            Text.width({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.height({ "id": 16777437, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.margin({ right: '10vp', left: '10vp' });
            Text.onClick(() => {
                router.pushUrl({
                    url: 'pages/WebShopPage',
                    params: {
                        weburl: this.weburl
                    }
                })
                    .then(() => {
                    // success
                })
                    .catch(err => {
                    console.error(`pushUrl failed, code is ${err.code}, message is ${err.message}`);
                });
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=MovieDetailsTitle.js.map