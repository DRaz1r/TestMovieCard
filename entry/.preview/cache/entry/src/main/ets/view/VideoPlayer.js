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
import prompt from '@ohos:promptAction';
import { VideoSlider } from '@bundle:com.huawei.moviecard/entry/ets/view/VideoPlaySlider';
import { prepared, finish, changeSliderTime } from '@bundle:com.huawei.moviecard/entry/ets/model/VideoControll';
import { START_TIME, COMMON_NUM_DURATION, MESSAGE, ALL_PERCENT } from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
export class VideoPlayer extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.source = undefined;
        this.controller = undefined;
        this.previewUris = { "id": 16777557, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" };
        this.__currentTime = new ObservedPropertySimplePU(0, this, "currentTime");
        this.addProvidedVar("currentTime", this.__currentTime);
        this.__durationTime = new ObservedPropertySimplePU(0, this, "durationTime");
        this.addProvidedVar("durationTime", this.__durationTime);
        this.__durationStringTime = new ObservedPropertySimplePU(START_TIME, this, "durationStringTime");
        this.addProvidedVar("durationStringTime", this.__durationStringTime);
        this.__currentStringTime = new ObservedPropertySimplePU(START_TIME, this, "currentStringTime");
        this.addProvidedVar("currentStringTime", this.__currentStringTime);
        this.__isPlay = this.initializeConsume("isPlay", "isPlay");
        this.__isOpacity = this.initializeConsume("isOpacity", "isOpacity");
        this.__flag = this.initializeConsume("flag", "flag");
        this.__isLoading = this.initializeConsume("isLoading", "isLoading");
        this.__progressVal = this.initializeConsume("progressVal", "progressVal");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.source !== undefined) {
            this.source = params.source;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
        if (params.previewUris !== undefined) {
            this.previewUris = params.previewUris;
        }
        if (params.currentTime !== undefined) {
            this.currentTime = params.currentTime;
        }
        if (params.durationTime !== undefined) {
            this.durationTime = params.durationTime;
        }
        if (params.durationStringTime !== undefined) {
            this.durationStringTime = params.durationStringTime;
        }
        if (params.currentStringTime !== undefined) {
            this.currentStringTime = params.currentStringTime;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.__currentTime.aboutToBeDeleted();
        this.__durationTime.aboutToBeDeleted();
        this.__durationStringTime.aboutToBeDeleted();
        this.__currentStringTime.aboutToBeDeleted();
        this.__isPlay.aboutToBeDeleted();
        this.__isOpacity.aboutToBeDeleted();
        this.__flag.aboutToBeDeleted();
        this.__isLoading.aboutToBeDeleted();
        this.__progressVal.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get currentTime() {
        return this.__currentTime.get();
    }
    set currentTime(newValue) {
        this.__currentTime.set(newValue);
    }
    get durationTime() {
        return this.__durationTime.get();
    }
    set durationTime(newValue) {
        this.__durationTime.set(newValue);
    }
    get durationStringTime() {
        return this.__durationStringTime.get();
    }
    set durationStringTime(newValue) {
        this.__durationStringTime.set(newValue);
    }
    get currentStringTime() {
        return this.__currentStringTime.get();
    }
    set currentStringTime(newValue) {
        this.__currentStringTime.set(newValue);
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
    get flag() {
        return this.__flag.get();
    }
    set flag(newValue) {
        this.__flag.set(newValue);
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/VideoPlayer.ets(46:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Video.create({
                src: this.source,
                previewUri: this.previewUris,
                controller: this.controller
            });
            Video.debugLine("view/VideoPlayer.ets(47:7)");
            Video.width(ALL_PERCENT);
            Video.height("90%" /* NINETY_PERCENT */);
            Video.controls(false);
            Video.autoPlay(false);
            Video.objectFit(ImageFit.Contain);
            Video.loop(false);
            Video.onUpdate((event) => {
                this.currentTime = event.time;
                this.currentStringTime = changeSliderTime(this.currentTime);
            });
            Video.onPrepared((event) => {
                prepared.call(this, event);
            });
            Video.onFinish(() => {
                finish.call(this);
            });
            Video.onError(() => {
                prompt.showToast({
                    duration: COMMON_NUM_DURATION,
                    message: MESSAGE
                });
            });
            if (!isInitialRender) {
                Video.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new VideoSlider(this, { controller: this.controller }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=VideoPlayer.js.map