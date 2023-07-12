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
import router from '@ohos:router';
import MovieStills from '@bundle:com.huawei.moviecard/entry/ets/view/MovieStills';
import MovieStarring from '@bundle:com.huawei.moviecard/entry/ets/view/MovieStarring';
import CommonConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/CommonConstants';
import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import CommonUtils from '@bundle:com.huawei.moviecard/entry/ets/common/utils/CommonUtils';
import StoryIntroduce from '@bundle:com.huawei.moviecard/entry/ets/view/StoryIntroduce';
import MovieDetailsTitle from '@bundle:com.huawei.moviecard/entry/ets/view/MovieDetailsTitle';
import Logger from '@bundle:com.huawei.moviecard/entry/ets/common/utils/Logger';
import { SwiperVideo } from '@bundle:com.huawei.moviecard/entry/ets/view/IndexSwiper';
class MovieDetailPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.introduction = undefined;
        this.movieData = undefined;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.introduction !== undefined) {
            this.introduction = params.introduction;
        }
        if (params.movieData !== undefined) {
            this.movieData = params.movieData;
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
        var _a, _b;
        let index = 0;
        if (!CommonUtils.isEmpty(router.getParams())) {
            index = (_a = router.getParams()[CommonConstants.INDEX_KEY]) !== null && _a !== void 0 ? _a : 0;
        }
        else {
            index = (_b = globalThis.position) !== null && _b !== void 0 ? _b : 0;
        }
        let listData = CommonUtils.getListData();
        if (CommonUtils.isEmptyArr(listData)) {
            Logger.error(CommonConstants.TAG_DETAILS_PAGE, 'listData is 0');
            return;
        }
        this.movieData = listData[index];
        this.introduction = listData[index].introduction;
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Scroll.create();
            Scroll.debugLine("pages/MovieDetailsPage.ets(52:5)");
            Scroll.edgeEffect(EdgeEffect.Fade);
            Scroll.scrollBarWidth(6);
            if (!isInitialRender) {
                Scroll.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MovieDetailsPage.ets(53:7)");
            Column.backgroundColor({ "id": 16777345, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create({ "id": 16777294, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.debugLine("pages/MovieDetailsPage.ets(54:9)");
            Text.fontWeight(FontWeight.Bolder);
            Text.fontSize({ "id": 16777452, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.alignSelf(ItemAlign.Start);
            Text.margin({
                left: StyleConstants.COMMON_MARGIN_LEFT,
                top: StyleConstants.DETAILS_COMMON_MARGIN,
                bottom: StyleConstants.DETAILS_COMMON_MARGIN
            });
            Text.height({ "id": 16777386, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/MovieDetailsPage.ets(64:9)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MovieDetailsTitle(this, {
                        movieDetail: this.movieData
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new StoryIntroduce(this, {
                        introduction: this.introduction
                    }, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create({ space: 24 /* FOURTH_MARGIN */ });
            Column.debugLine("pages/MovieDetailsPage.ets(73:9)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            __Common__.create();
            __Common__.margin({ top: 18 /* THIRD_MARGIN */ });
            if (!isInitialRender) {
                __Common__.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new SwiperVideo(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        __Common__.pop();
        Column.pop();
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MovieStarring(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        {
            this.observeComponentCreation((elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                if (isInitialRender) {
                    ViewPU.create(new MovieStills(this, {}, undefined, elmtId));
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
                ViewStackProcessor.StopGetAccessRecording();
            });
        }
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new MovieDetailPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=MovieDetailsPage.js.map