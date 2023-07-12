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
import router from '@ohos:router';
import { VideoPlayer } from '@bundle:com.huawei.moviecard/entry/ets/view/VideoPlayer';
import { COMMON_NUM_FONT_WEIGHT, ALL_PERCENT, STACK_STYLE } from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
class Play extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.source = router.getParams()['source'];
        this.startIconResource = { "id": 16777541, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" };
        this.backIconResource = { "id": 16777522, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" };
        this.__isPlay = new ObservedPropertySimplePU(false, this, "isPlay");
        this.addProvidedVar("isPlay", this.__isPlay);
        this.__isOpacity = new ObservedPropertySimplePU(false, this, "isOpacity");
        this.addProvidedVar("isOpacity", this.__isOpacity);
        this.controller = new VideoController();
        this.__isLoading = new ObservedPropertySimplePU(false, this, "isLoading");
        this.addProvidedVar("isLoading", this.__isLoading);
        this.__progressVal = new ObservedPropertySimplePU(0, this, "progressVal");
        this.addProvidedVar("progressVal", this.__progressVal);
        this.__flag = new ObservedPropertySimplePU(false, this, "flag");
        this.addProvidedVar("flag", this.__flag);
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.source !== undefined) {
            this.source = params.source;
        }
        if (params.startIconResource !== undefined) {
            this.startIconResource = params.startIconResource;
        }
        if (params.backIconResource !== undefined) {
            this.backIconResource = params.backIconResource;
        }
        if (params.isPlay !== undefined) {
            this.isPlay = params.isPlay;
        }
        if (params.isOpacity !== undefined) {
            this.isOpacity = params.isOpacity;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.isLoading !== undefined) {
            this.isLoading = params.isLoading;
        }
        if (params.progressVal !== undefined) {
            this.progressVal = params.progressVal;
        }
        if (params.flag !== undefined) {
            this.flag = params.flag;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.__isPlay.aboutToBeDeleted();
        this.__isOpacity.aboutToBeDeleted();
        this.__isLoading.aboutToBeDeleted();
        this.__progressVal.aboutToBeDeleted();
        this.__flag.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isPlay() {
        return this.__isPlay.get();
    }
    set isPlay(newValue) {
        this.__isPlay.set(newValue);
    }
    get isOpacity() {
        return this.__isOpacity.get();
    }
    set isOpacity(newValue) {
        this.__isOpacity.set(newValue);
    }
    get isLoading() {
        return this.__isLoading.get();
    }
    set isLoading(newValue) {
        this.__isLoading.set(newValue);
    }
    get progressVal() {
        return this.__progressVal.get();
    }
    set progressVal(newValue) {
        this.__progressVal.set(newValue);
    }
    get flag() {
        return this.__flag.get();
    }
    set flag(newValue) {
        this.__flag.set(newValue);
    }
    onPageHide() {
        this.controller.pause();
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height(ALL_PERCENT);
            Column.backgroundColor(Color.Black);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width(ALL_PERCENT);
            Row.margin({ left: 12 /* FIRST_MARGIN */, top: 12 /* FIRST_MARGIN */ });
            Row.justifyContent(FlexAlign.Start);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.backIconResource);
            Image.width(24 /* FOURTH_MARGIN */);
            Image.height(24 /* FOURTH_MARGIN */);
            Image.margin({ left: 24 /* FOURTH_MARGIN */ });
            Image.onClick(() => {
                router.back();
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777244, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontColor(Color.White);
            Text.fontSize(24 /* FOURTH_MARGIN */);
            Text.fontWeight(COMMON_NUM_FONT_WEIGHT);
            Text.margin({ left: 12 /* FIRST_MARGIN */ });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Stack.create();
            if (!isInitialRender) {
                Stack.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (!this.isPlay && !this.isLoading) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Image.create(this.startIconResource);
                        Image.width(50 /* FIFTH_MARGIN */);
                        Image.height(50 /* FIFTH_MARGIN */);
                        Image.zIndex(STACK_STYLE.IMAGE_Z_INDEX);
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
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isLoading) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.observeComponentCreation((elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        Progress.create({
                            value: STACK_STYLE.PROGRESS_VALUE,
                            total: STACK_STYLE.PROGRESS_TOTAL,
                            type: ProgressType.ScaleRing
                        });
                        Progress.color(Color.Grey);
                        Progress.value(this.progressVal);
                        Progress.width(STACK_STYLE.PROGRESS_WIDTH);
                        Progress.style({
                            strokeWidth: STACK_STYLE.PROGRESS_STROKE_WIDTH,
                            scaleCount: STACK_STYLE.PROGRESS_SCALE_COUNT,
                            scaleWidth: STACK_STYLE.PROGRESS_SCALE_WIDTH
                        });
                        Progress.zIndex(STACK_STYLE.PROGRESS_Z_INDEX);
                        if (!isInitialRender) {
                            Progress.pop();
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
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.zIndex(0);
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new VideoPlayer(this, {
                        source: this.source,
                        controller: this.controller
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        Stack.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new Play(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=SimpleVideoPlay.js.map