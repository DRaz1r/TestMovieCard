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
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import DataSource from '@bundle:com.huawei.moviecard/entry/ets/common/datasource/DataSource';
export default class MovieStarring extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.dataSource = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.dataSource !== undefined) {
            this.dataSource = params.dataSource;
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
        this.dataSource = new DataSource(CommonUtils.getStarringData());
    }
    initialRender() {
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
            Row.create();
            Row.margin({
                left: StyleConstants.COMMON_MARGIN_LEFT,
                top: StyleConstants.COMMON_MARGIN_TOP,
                right: StyleConstants.COMMON_MARGIN_RIGHT,
                bottom: StyleConstants.COMMON_MARGIN_BOTTOM
            });
            Row.width(StyleConstants.STARRING_WIDTH);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777306, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontSize({ "id": 16777476, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777318, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777305, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontSize({ "id": 16777472, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.opacity({ "id": 16777352, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777318, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.layoutWeight(StyleConstants.WEIGHT_ONE);
            Text.width(StyleConstants.STARRING_TEXT_WIDTH);
            Text.textAlign(TextAlign.End);
            Text.fontWeight(FontWeight.Normal);
            Text.margin({ right: { "id": 16777475, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777521, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width({ "id": 16777383, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777382, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: StyleConstants.STARRING_SPACE });
            List.listDirection(Axis.Horizontal);
            List.edgeEffect(EdgeEffect.None);
            List.margin({ left: StyleConstants.COMMON_MARGIN_LEFT });
            List.width(StyleConstants.STARRING_LIST_WIDTH);
            List.height(StyleConstants.STARRING_LIST_HEIGHT);
            if (!isInitialRender) {
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
                            Image.create(item);
                            Image.width({ "id": 16777474, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.height({ "id": 16777474, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.borderRadius({ "id": 16777473, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create({ "id": 16777243, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontSize({ "id": 16777341, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777318, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.alignSelf(ItemAlign.Start);
                            Text.margin({
                                top: { "id": 16777343, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                                bottom: { "id": 16777342, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create({ "id": 16777285, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontSize({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.opacity({ "id": 16777352, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777318, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.alignSelf(ItemAlign.Start);
                            Text.fontWeight(FontWeight.Normal);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
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
                            Image.create(item);
                            Image.width({ "id": 16777474, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.height({ "id": 16777474, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.borderRadius({ "id": 16777473, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create({ "id": 16777243, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontSize({ "id": 16777341, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777318, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.alignSelf(ItemAlign.Start);
                            Text.margin({
                                top: { "id": 16777343, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                                bottom: { "id": 16777342, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create({ "id": 16777285, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontSize({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.opacity({ "id": 16777352, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777318, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.alignSelf(ItemAlign.Start);
                            Text.fontWeight(FontWeight.Normal);
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        Column.pop();
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
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=MovieStarring.js.map