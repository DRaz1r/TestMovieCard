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
export default class StarsWidget extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.rating = '';
        this.stars = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.rating !== undefined) {
            this.rating = params.rating;
        }
        if (params.stars !== undefined) {
            this.stars = params.stars;
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("view/StarsWidget.ets(24:5)");
            Row.margin({
                top: { "id": 16777504, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                bottom: { "id": 16777504, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            Row.alignSelf(ItemAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create({ space: StyleConstants.STARS_LIST_SPACE });
            List.debugLine("view/StarsWidget.ets(25:7)");
            List.listDirection(Axis.Horizontal);
            List.edgeEffect(EdgeEffect.None);
            List.height({ "id": 16777502, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            List.width({ "id": 16777503, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                List.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const isLazyCreate = true;
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        ListItem.create(deepRenderFunction, isLazyCreate);
                        ListItem.debugLine("view/StarsWidget.ets(27:11)");
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
                            Image.create(item);
                            Image.debugLine("view/StarsWidget.ets(28:13)");
                            Image.width({ "id": 16777501, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.height({ "id": 16777501, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.observeComponentCreation((elmtId, isInitialRender) => {
                            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                            Image.create(item);
                            Image.debugLine("view/StarsWidget.ets(28:13)");
                            Image.width({ "id": 16777501, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            Image.height({ "id": 16777501, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                            if (!isInitialRender) {
                                Image.pop();
                            }
                            ViewStackProcessor.StopGetAccessRecording();
                        });
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
            this.forEachUpdateFunction(elmtId, this.stars, forEachItemGenFunction, (item, index) => JSON.stringify(item) + index, false, true);
            if (!isInitialRender) {
                ForEach.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        ForEach.pop();
        List.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Blank.create();
            Blank.debugLine("view/StarsWidget.ets(39:7)");
            Blank.width({ "id": 16777374, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.rating);
            Text.debugLine("view/StarsWidget.ets(40:7)");
            Text.fontSize({ "id": 16777464, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor({ "id": 16777346, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=StarsWidget.js.map