/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
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
import mainViewModel from '@bundle:com.huawei.moviecard/entry/ets/viewmodel/MainViewModel';
import router from '@ohos:router';
export default class MinePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    settingCell(item, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.justifyContent(FlexAlign.SpaceBetween);
            Row.width(CommonConstants.FULL_PARENT);
            Row.padding({
                left: { "id": 16777461, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777462, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create({ space: CommonConstants.COMMON_SPACE });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(item.img);
            Image.width({ "id": 16777463, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777463, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(item.title);
            Text.fontSize({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (item.others === null) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create({ "id": 16777558, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        Image.width({ "id": 16777452, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        Image.height({ "id": 16777451, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                        if (!isInitialRender) {
                            Image.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Toggle.create({ type: ToggleType.Switch, isOn: false });
                        if (!isInitialRender) {
                            Toggle.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                    Toggle.pop();
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: CommonConstants.COMMON_SPACE });
            Column.height(CommonConstants.FULL_PARENT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.width(CommonConstants.FULL_PARENT);
            Column.alignItems(HorizontalAlign.Start);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777267, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Medium);
            Text.fontSize({ "id": 16777433, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777415, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Text.padding({ left: { "id": 16777416, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.margin({ top: { "id": 16777446, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Row.alignItems(VerticalAlign.Center);
            Row.width(CommonConstants.FULL_PARENT);
            Row.height({ "id": 16777445, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Row.backgroundColor(Color.White);
            Row.padding({ left: { "id": 16777447, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Row.borderRadius({ "id": 16777443, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777495, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width({ "id": 16777448, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777448, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ left: { "id": 16777446, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777294, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontSize({ "id": 16777444, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777293, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontSize({ "id": 16777392, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.margin({ top: { "id": 16777459, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            List.create();
            List.backgroundColor(Color.White);
            List.divider({
                strokeWidth: { "id": 16777458, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                color: Color.Grey,
                startMargin: { "id": 16777457, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                endMargin: { "id": 16777454, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            List.borderRadius({ "id": 16777453, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            List.padding({ top: { "id": 16777456, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, bottom: { "id": 16777456, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
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
                        ListItem.height({ "id": 16777455, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
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
                        this.settingCell.bind(this)(item);
                        ListItem.pop();
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.updateFuncByElmtId.set(elmtId, itemCreation);
                        this.settingCell.bind(this)(item);
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
            this.forEachUpdateFunction(elmtId, mainViewModel.getSettingListData(), forEachItemGenFunction, item => JSON.stringify(item), false, false);
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
            if (!isInitialRender) {
                Blank.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Blank.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel({ "id": 16777295, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { type: ButtonType.Capsule });
            Button.width(CommonConstants.BUTTON_WIDTH);
            Button.height({ "id": 16777394, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.fontSize({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.fontColor({ "id": 16777334, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.backgroundColor({ "id": 16777333, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.margin({ bottom: { "id": 16777450, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Button.onClick(() => {
                router.replaceUrl({ url: 'pages/LoginPage' });
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=MinePage.js.map