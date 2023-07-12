export class Collect extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.content = undefined;
        this.__isComplete = new ObservedPropertySimplePU(false, this, "isComplete");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.content !== undefined) {
            this.content = params.content;
        }
        if (params.isComplete !== undefined) {
            this.isComplete = params.isComplete;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isComplete.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isComplete.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isComplete() {
        return this.__isComplete.get();
    }
    set isComplete(newValue) {
        this.__isComplete.set(newValue);
    }
    labelIcon(icon, parent = null) {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create(icon);
            Image.debugLine("view/Collect.ets(7:5)");
            Image.objectFit(ImageFit.Contain);
            Image.width('28vp');
            Image.height('28vp');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("view/Collect.ets(15:5)");
            Column.margin({ top: '15vp' });
            Column.backgroundColor({ "id": 16777365, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.width('28vp');
            Column.height('28vp');
            Column.onClick(() => {
                //待添加数据库
                this.isComplete = !this.isComplete;
            });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            If.create();
            if (this.isComplete) {
                this.ifElseBranchUpdateFunction(0, () => {
                    this.labelIcon.bind(this)({ "id": 16777542, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                });
            }
            else {
                this.ifElseBranchUpdateFunction(1, () => {
                    this.labelIcon.bind(this)({ "id": 16777554, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
                });
            }
            if (!isInitialRender) {
                If.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        If.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=Collect.js.map