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
            Column.debugLine("view/MovieStarring.ets(29:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/MovieStarring.ets(30:7)");
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
            Text.create({ "id": 16777262, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.debugLine("view/MovieStarring.ets(31:9)");
            Text.fontSize({ "id": 16777530, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777319, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777261, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.debugLine("view/MovieStarring.ets(35:9)");
            Text.fontSize({ "id": 16777526, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.opacity({ "id": 16777409, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777319, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.layoutWeight(StyleConstants.WEIGHT_ONE);
            Text.width(StyleConstants.STARRING_TEXT_WIDTH);
            Text.textAlign(TextAlign.End);
            Text.fontWeight(FontWeight.Normal);
            Text.margin({ right: { "id": 16777529, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777372, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.debugLine("view/MovieStarring.ets(44:9)");
            Image.width({ "id": 16777439, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777438, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: StyleConstants.STARRING_SPACE });
            List.debugLine("view/MovieStarring.ets(56:7)");
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
                        ListItem.debugLine("view/MovieStarring.ets(58:11)");
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
                            Column.debugLine("view/MovieStarring.ets(59:13)");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(item);
                            Image.debugLine("view/MovieStarring.ets(60:15)");
                            Image.width({ "id": 16777528, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.height({ "id": 16777528, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.borderRadius({ "id": 16777527, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create({ "id": 16777229, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.debugLine("view/MovieStarring.ets(64:15)");
                            Text.fontSize({ "id": 16777400, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777319, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.alignSelf(ItemAlign.Start);
                            Text.margin({
                                top: { "id": 16777402, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                                bottom: { "id": 16777401, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create({ "id": 16777253, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.debugLine("view/MovieStarring.ets(73:15)");
                            Text.fontSize({ "id": 16777496, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.opacity({ "id": 16777409, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777319, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
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
                            Column.debugLine("view/MovieStarring.ets(59:13)");
                            if (!isInitialRender) {
                                Column.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(item);
                            Image.debugLine("view/MovieStarring.ets(60:15)");
                            Image.width({ "id": 16777528, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.height({ "id": 16777528, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.borderRadius({ "id": 16777527, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create({ "id": 16777229, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.debugLine("view/MovieStarring.ets(64:15)");
                            Text.fontSize({ "id": 16777400, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777319, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontWeight(FontWeight.Normal);
                            Text.alignSelf(ItemAlign.Start);
                            Text.margin({
                                top: { "id": 16777402, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                                bottom: { "id": 16777401, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
                            });
                            if (!isInitialRender) {
                                Text.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        Text.pop();
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Text.create({ "id": 16777253, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.debugLine("view/MovieStarring.ets(73:15)");
                            Text.fontSize({ "id": 16777496, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.opacity({ "id": 16777409, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Text.fontColor({ "id": 16777319, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
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