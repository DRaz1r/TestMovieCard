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
import { iconOnclick, sliderOnchange } from '@bundle:com.huawei.moviecard/entry/ets/model/VideoControll';
import { ALL_PERCENT, SMALL_TRACK_THICK_NESS, DEFAULT_OPACITY, BIG_TRACK_THICK_NESS, IMAGE_SIZE } from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
export class VideoSlider extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__isOpacity = this.initializeConsume("isOpacity", "isOpacity");
        this.controller = undefined;
        this.__currentStringTime = this.initializeConsume("currentStringTime", "currentStringTime");
        this.__currentTime = this.initializeConsume("currentTime", "currentTime");
        this.__durationTime = this.initializeConsume("durationTime", "durationTime");
        this.__durationStringTime = this.initializeConsume("durationStringTime", "durationStringTime");
        this.__isPlay = this.initializeConsume("isPlay", "isPlay");
        this.__flag = this.initializeConsume("flag", "flag");
        this.__isLoading = this.initializeConsume("isLoading", "isLoading");
        this.__progressVal = this.initializeConsume("progressVal", "progressVal");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.__isOpacity.aboutToBeDeleted();
        this.__currentStringTime.aboutToBeDeleted();
        this.__currentTime.aboutToBeDeleted();
        this.__durationTime.aboutToBeDeleted();
        this.__durationStringTime.aboutToBeDeleted();
        this.__isPlay.aboutToBeDeleted();
        this.__flag.aboutToBeDeleted();
        this.__isLoading.aboutToBeDeleted();
        this.__progressVal.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isOpacity() {
        return this.__isOpacity.get();
    }
    set isOpacity(newValue) {
        this.__isOpacity.set(newValue);
    }
    get currentStringTime() {
        return this.__currentStringTime.get();
    }
    set currentStringTime(newValue) {
        this.__currentStringTime.set(newValue);
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
    get isPlay() {
        return this.__isPlay.get();
    }
    set isPlay(newValue) {
        this.__isPlay.set(newValue);
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
            Row.create({ space: 12 /* FIRST_MARGIN */ });
            Row.debugLine("view/VideoPlaySlider.ets(44:5)");
            Row.opacity(this.isOpacity ? DEFAULT_OPACITY : 1);
            Row.width(ALL_PERCENT);
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.isPlay ? { "id": 16777552, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } : { "id": 16777312, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.debugLine("view/VideoPlaySlider.ets(45:7)");
            Image.width(IMAGE_SIZE);
            Image.height(IMAGE_SIZE);
            Image.margin({ left: 12 /* FIRST_MARGIN */ });
            Image.onClick(() => {
                iconOnclick.call(this);
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.currentStringTime);
            Text.debugLine("view/VideoPlaySlider.ets(52:7)");
            Text.fontSize(16 /* SECOND_MARGIN */);
            Text.fontColor(Color.White);
            Text.margin({ left: 12 /* FIRST_MARGIN */ });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Slider.create({
                value: this.currentTime,
                min: 0,
                max: this.durationTime,
                step: 1,
                style: SliderStyle.OutSet
            });
            Slider.debugLine("view/VideoPlaySlider.ets(56:7)");
            Slider.blockColor({ "id": 16777341, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Slider.width("56.7%" /* SLIDER_WITH */);
            Slider.trackColor(Color.Gray);
            Slider.selectedColor({ "id": 16777341, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Slider.showSteps(true);
            Slider.showTips(true);
            Slider.trackThickness(this.isOpacity ? SMALL_TRACK_THICK_NESS : BIG_TRACK_THICK_NESS);
            Slider.onChange((value, mode) => {
                sliderOnchange.call(this, value, mode);
            });
            if (!isInitialRender) {
                Slider.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.durationStringTime);
            Text.debugLine("view/VideoPlaySlider.ets(73:7)");
            Text.fontSize(16 /* SECOND_MARGIN */);
            Text.margin({ right: 12 /* FIRST_MARGIN */ });
            Text.fontColor(Color.White);
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
//# sourceMappingURL=VideoPlaySlider.js.map