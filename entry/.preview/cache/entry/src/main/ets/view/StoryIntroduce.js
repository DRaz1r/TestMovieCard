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
export default class StoryIntroduce extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__tipsTextLines = new ObservedPropertySimplePU(CommonConstants.DEFAULT_LINES, this, "tipsTextLines");
        this.__tipsText = new ObservedPropertyObjectPU({ "id": 16777233, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }, this, "tipsText");
        this.introduction = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.tipsTextLines !== undefined) {
            this.tipsTextLines = params.tipsTextLines;
        }
        if (params.tipsText !== undefined) {
            this.tipsText = params.tipsText;
        }
        if (params.introduction !== undefined) {
            this.introduction = params.introduction;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__tipsTextLines.purgeDependencyOnElmtId(rmElmtId);
        this.__tipsText.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__tipsTextLines.aboutToBeDeleted();
        this.__tipsText.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get tipsTextLines() {
        return this.__tipsTextLines.get();
    }
    set tipsTextLines(newValue) {
        this.__tipsTextLines.set(newValue);
    }
    get tipsText() {
        return this.__tipsText.get();
    }
    set tipsText(newValue) {
        this.__tipsText.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/StoryIntroduce.ets(26:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777293, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.debugLine("view/StoryIntroduce.ets(27:7)");
            Text.fontSize({ "id": 16777512, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            Text.fontColor({ "id": 16777346, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.margin({
                top: { "id": 16777513, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                bottom: { "id": 16777514, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                left: StyleConstants.COMMON_MARGIN_LEFT
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create({ alignContent: Alignment.BottomEnd });
            Stack.debugLine("view/StoryIntroduce.ets(37:7)");
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.introduction);
            Text.debugLine("view/StoryIntroduce.ets(38:9)");
            Text.fontSize({ "id": 16777411, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777412, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor({ "id": 16777346, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.opacity({ "id": 16777379, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Normal);
            Text.maxLines(this.tipsTextLines);
            Text.margin({
                left: StyleConstants.COMMON_MARGIN_LEFT,
                right: StyleConstants.COMMON_MARGIN_LEFT
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777299, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.debugLine("view/StoryIntroduce.ets(49:9)");
            Image.width({ "id": 16777449, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777448, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.tipsText);
            Text.debugLine("view/StoryIntroduce.ets(52:9)");
            Text.fontColor({ "id": 16777366, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontSize({ "id": 16777515, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.lineHeight({ "id": 16777516, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(FontWeight.Bolder);
            Text.backgroundColor(Color.White);
            Text.textAlign(TextAlign.End);
            Text.margin({
                right: StyleConstants.COMMON_MARGIN_LEFT
            });
            Text.onClick(() => {
                if (this.tipsTextLines === CommonConstants.DEFAULT_LINES) {
                    this.tipsTextLines = CommonConstants.MAX_LINES;
                    this.tipsText = { "id": 16777231, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" };
                }
                else {
                    this.tipsTextLines = CommonConstants.DEFAULT_LINES;
                    this.tipsText = { "id": 16777233, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" };
                }
            });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Stack.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=StoryIntroduce.js.map