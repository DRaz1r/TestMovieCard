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
import MinePage from '@bundle:com.huawei.moviecard/entry/ets/pages/MinePage';
import { MovieListPage } from '@bundle:com.huawei.moviecard/entry/ets/pages/MovieListPage';
class MainPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__currentIndex = new ObservedPropertySimplePU(CommonConstants.HOME_TAB_INDEX, this, "currentIndex");
        this.tabsController = new TabsController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue) {
        this.__currentIndex.set(newValue);
    }
    // 底栏页签
    TabBuilder(title, index, selectedImg, normalImg, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MainPage.ets(34:5)");
            Column.justifyContent(FlexAlign.Center);
            Column.height({ "id": 16777440, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.width(CommonConstants.FULL_PARENT);
            Column.onClick(() => {
                this.currentIndex = index;
                this.tabsController.changeIndex(this.currentIndex);
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.currentIndex === index ? selectedImg : normalImg);
            Image.debugLine("pages/MainPage.ets(35:7)");
            Image.width({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777442, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(title);
            Text.debugLine("pages/MainPage.ets(38:7)");
            Text.margin({ top: { "id": 16777443, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            Text.fontSize({ "id": 16777447, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor(this.currentIndex === index ? { "id": 16777356, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } : { "id": 16777355, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Tabs.create({
                barPosition: BarPosition.End,
                controller: this.tabsController
            });
            Tabs.debugLine("pages/MainPage.ets(53:5)");
            Tabs.width(CommonConstants.FULL_PARENT);
            Tabs.backgroundColor(Color.White);
            Tabs.barHeight({ "id": 16777440, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Tabs.barMode(BarMode.Fixed);
            Tabs.onChange((index) => {
                this.currentIndex = index;
            });
            if (!isInitialRender) {
                Tabs.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new MovieListPage(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: { "id": 16777444, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, right: { "id": 16777444, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777354, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, CommonConstants.HOME_TITLE, CommonConstants.HOME_TAB_INDEX, { "id": 16777218, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777550, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/MainPage.ets(58:7)");
            if (!isInitialRender) {
                //1号页签
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TabContent.create(() => {
                {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        if (isInitialRender) {
                            ViewPU.create(new MinePage(this, {}, undefined, elmtId));
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    });
                }
            });
            TabContent.padding({ left: { "id": 16777444, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, right: { "id": 16777444, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            TabContent.backgroundColor({ "id": 16777354, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            TabContent.tabBar({ builder: () => {
                    this.TabBuilder.call(this, CommonConstants.MINE_TITLE, CommonConstants.MINE_TAB_INDEX, { "id": 16777318, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, { "id": 16777560, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                } });
            TabContent.debugLine("pages/MainPage.ets(67:7)");
            if (!isInitialRender) {
                //2号页签
                TabContent.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        TabContent.pop();
        Tabs.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MainPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MainPage.js.map