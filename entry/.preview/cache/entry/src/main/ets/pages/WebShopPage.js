import web_webview from '@ohos:web.webview';
import router from '@ohos:router';
class WebComponent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        var _a;
        super(parent, __localStorage, elmtId);
        this.__src = new ObservedPropertySimplePU((_a = router.getParams()) === null || _a === void 0 ? void 0 : _a['weburl'], this, "src");
        this.controller = new web_webview.WebviewController();
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.src !== undefined) {
            this.src = params.src;
        }
        if (params.controller !== undefined) {
            this.controller = params.controller;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__src.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__src.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get src() {
        return this.__src.get();
    }
    set src(newValue) {
        this.__src.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.debugLine("pages/WebShopPage.ets(10:5)");
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Web.create({ src: this.src, controller: this.controller });
            Web.debugLine("pages/WebShopPage.ets(11:7)");
            if (!isInitialRender) {
                Web.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new WebComponent(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=WebShopPage.js.map