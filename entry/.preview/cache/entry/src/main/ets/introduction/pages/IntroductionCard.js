"use strict";
let cardstorage = new LocalStorage();
class IntroductionCard extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__tt = this.createLocalStorageProp("topTitle", '123456', "tt");
        this.__td = this.createLocalStorageProp("topDescribe", '', "td");
        this.__bt = this.createLocalStorageProp("bottomTitle", '', "bt");
        this.__bd = this.createLocalStorageProp("bottomDescribe", '', "bd");
        this.__ti = this.createLocalStorageProp("topMovieImage", '', "ti");
        this.__bi = this.createLocalStorageProp("bottomMovieImage", '', "bi");
        this.__bin = this.createLocalStorageProp("bottomIndex", 0, "bin");
        this.__tin = this.createLocalStorageProp("topIndex", 0, "tin");
        this.ACTION_TYPE = 'router';
        this.ABILITY_NAME = 'EntryDetailsAbility';
        this.MESSAGE = 'add detail';
        this.FULL_WIDTH_PERCENT = '100%';
        this.FULL_HEIGHT_PERCENT = '100%';
        this.HALF_HEIGHT_PERCENT = '50%';
        this.TARGET_TEXT_OPACITY = 0.6;
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.ACTION_TYPE !== undefined) {
            this.ACTION_TYPE = params.ACTION_TYPE;
        }
        if (params.ABILITY_NAME !== undefined) {
            this.ABILITY_NAME = params.ABILITY_NAME;
        }
        if (params.MESSAGE !== undefined) {
            this.MESSAGE = params.MESSAGE;
        }
        if (params.FULL_WIDTH_PERCENT !== undefined) {
            this.FULL_WIDTH_PERCENT = params.FULL_WIDTH_PERCENT;
        }
        if (params.FULL_HEIGHT_PERCENT !== undefined) {
            this.FULL_HEIGHT_PERCENT = params.FULL_HEIGHT_PERCENT;
        }
        if (params.HALF_HEIGHT_PERCENT !== undefined) {
            this.HALF_HEIGHT_PERCENT = params.HALF_HEIGHT_PERCENT;
        }
        if (params.TARGET_TEXT_OPACITY !== undefined) {
            this.TARGET_TEXT_OPACITY = params.TARGET_TEXT_OPACITY;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
    }
    aboutToBeDeleted() {
        this.__tt.aboutToBeDeleted();
        this.__td.aboutToBeDeleted();
        this.__bt.aboutToBeDeleted();
        this.__bd.aboutToBeDeleted();
        this.__ti.aboutToBeDeleted();
        this.__bi.aboutToBeDeleted();
        this.__bin.aboutToBeDeleted();
        this.__tin.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get tt() {
        return this.__tt.get();
    }
    set tt(newValue) {
        this.__tt.set(newValue);
    }
    get td() {
        return this.__td.get();
    }
    set td(newValue) {
        this.__td.set(newValue);
    }
    get bt() {
        return this.__bt.get();
    }
    set bt(newValue) {
        this.__bt.set(newValue);
    }
    get bd() {
        return this.__bd.get();
    }
    set bd(newValue) {
        this.__bd.set(newValue);
    }
    get ti() {
        return this.__ti.get();
    }
    set ti(newValue) {
        this.__ti.set(newValue);
    }
    get bi() {
        return this.__bi.get();
    }
    set bi(newValue) {
        this.__bi.set(newValue);
    }
    get bin() {
        return this.__bin.get();
    }
    set bin(newValue) {
        this.__bin.set(newValue);
    }
    get tin() {
        return this.__tin.get();
    }
    set tin(newValue) {
        this.__tin.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("introduction/pages/IntroductionCard.ets(46:5)");
            Column.backgroundColor({ "id": 16777345, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.height(this.FULL_HEIGHT_PERCENT);
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.debugLine("introduction/pages/IntroductionCard.ets(47:7)");
            Row.height(this.HALF_HEIGHT_PERCENT);
            Row.onClick(() => {
                postCardAction(this, {
                    "action": this.ACTION_TYPE,
                    "abilityName": this.ABILITY_NAME,
                    "params": {
                        "index": this.tin
                    }
                });
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.ti);
            Image.debugLine("introduction/pages/IntroductionCard.ets(48:9)");
            Image.objectFit(ImageFit.Cover);
            Image.height(this.FULL_HEIGHT_PERCENT);
            Image.width({ "id": 16777417, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.padding({
                top: { "id": 16777374, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                bottom: { "id": 16777374, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                left: { "id": 16777377, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("introduction/pages/IntroductionCard.ets(57:9)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.tt);
            Text.debugLine("introduction/pages/IntroductionCard.ets(58:11)");
            Text.fontSize(14);
            Text.fontColor({ "id": 16777366, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(500);
            Text.width(this.FULL_WIDTH_PERCENT);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(1);
            Text.lineHeight(19);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.td);
            Text.debugLine("introduction/pages/IntroductionCard.ets(66:11)");
            Text.opacity(this.TARGET_TEXT_OPACITY);
            Text.fontColor({ "id": 16777366, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontSize(12);
            Text.fontWeight(400);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
            Text.lineHeight(16);
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
            Row.create();
            Row.debugLine("introduction/pages/IntroductionCard.ets(87:7)");
            Row.height(this.HALF_HEIGHT_PERCENT);
            Row.onClick(() => {
                postCardAction(this, {
                    "action": this.ACTION_TYPE,
                    "abilityName": this.ABILITY_NAME,
                    "params": {
                        "index": this.bin
                    }
                });
            });
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(this.bi);
            Image.debugLine("introduction/pages/IntroductionCard.ets(88:9)");
            Image.width({ "id": 16777417, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777416, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.objectFit(ImageFit.Cover);
            Image.height(this.FULL_HEIGHT_PERCENT);
            Image.padding({
                top: { "id": 16777374, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                bottom: { "id": 16777374, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                left: { "id": 16777377, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("introduction/pages/IntroductionCard.ets(98:9)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.bt);
            Text.debugLine("introduction/pages/IntroductionCard.ets(99:11)");
            Text.fontSize(14);
            Text.fontColor({ "id": 16777366, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontWeight(500);
            Text.width(this.FULL_WIDTH_PERCENT);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(1);
            Text.lineHeight(19);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create(this.bd);
            Text.debugLine("introduction/pages/IntroductionCard.ets(107:11)");
            Text.opacity(this.TARGET_TEXT_OPACITY);
            Text.fontColor({ "id": 16777366, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Text.fontSize(12);
            Text.fontWeight(400);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
            Text.lineHeight(16);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Column.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadEtsCard(new IntroductionCard(undefined, {}, cardstorage), "com.huawei.moviecard/entry/ets/introduction/pages/IntroductionCard");
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=IntroductionCard.js.map