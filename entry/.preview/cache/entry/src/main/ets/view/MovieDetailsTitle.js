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
export default class MovieDetailsTitle extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.movieDetail = undefined;
        this.movieImage = undefined;
        this.title = undefined;
        this.rating = undefined;
        this.stars = undefined;
        this.describe = undefined;
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
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/MovieDetailsTitle.ets(45:5)");
            Row.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.movieImage);
            Image.debugLine("view/MovieDetailsTitle.ets(46:7)");
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius({ "id": 16777518, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.margin({ left: StyleConstants.COMMON_MARGIN_LEFT });
            Image.width({ "id": 16777519, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777517, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/MovieDetailsTitle.ets(52:7)");
            Column.layoutWeight(StyleConstants.WEIGHT_ONE);
            Column.margin({ left: { "id": 16777468, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.title);
            Text.debugLine("view/MovieDetailsTitle.ets(53:9)");
            Text.fontSize({ "id": 16777520, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor({ "id": 16777346, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
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
            Text.debugLine("view/MovieDetailsTitle.ets(62:9)");
            Text.fontSize({ "id": 16777384, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777346, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Normal);
            Text.opacity({ "id": 16777379, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.margin({ right: StyleConstants.COMMON_MARGIN_LEFT, bottom: { "id": 16777383, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/MovieDetailsTitle.ets(70:9)");
            Row.width('100%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777296, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.debugLine("view/MovieDetailsTitle.ets(71:11)");
            Text.fontWeight(FontWeight.Bolder);
            Text.fontSize({ "id": 16777471, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.fontColor(Color.White);
            Text.borderRadius({ "id": 16777469, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.backgroundColor({ "id": 16777361, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.width({ "id": 16777472, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.height({ "id": 16777467, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
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
            Text.debugLine("view/MovieDetailsTitle.ets(82:11)");
            Text.fontWeight(FontWeight.Bolder);
            Text.fontSize({ "id": 16777471, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.textAlign(TextAlign.Center);
            Text.fontColor(Color.White);
            Text.borderRadius({ "id": 16777469, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.backgroundColor(Color.Pink);
            Text.width({ "id": 16777472, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.height({ "id": 16777467, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.margin({ right: '10vp', left: '10vp' });
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