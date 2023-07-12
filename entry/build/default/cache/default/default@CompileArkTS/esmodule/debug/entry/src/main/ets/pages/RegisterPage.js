import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import router from '@ohos:router';
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777330, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.height({ "id": 16777400, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.backgroundColor(Color.White);
    TextInput.margin({ top: { "id": 16777380, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
    TextInput.padding({ left: StyleConstants.INPUT_PADDING_LEFT });
}
class RegisterPage extends ViewPU {
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
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.padding({
                left: { "id": 16777395, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777398, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                bottom: { "id": 16777404, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            Column.backgroundColor({ "id": 16777314, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.height('100%');
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.width('100%');
            Row.height('10%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithChild({ type: ButtonType.Circle, stateEffect: true });
            Button.height({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.width({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.backgroundColor({ "id": 16777314, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.onClick(() => {
                router.back();
                console.log("Click back button");
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777516, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Row.create();
            Row.height('30%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Image.create({ "id": 16777537, "type": 20000, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.height({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.width({ "id": 16777429, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.backgroundColor({ "id": 16777314, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Image.margin('10vp');
            if (!isInitialRender) {
                Image.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.backgroundColor(Color.White);
            Column.borderRadius({ "id": 16777401, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777242, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            TextInput.maxLength(StyleConstants.INPUT_ACCOUNT_LENGTH);
            TextInput.type(InputType.Number);
            __TextInput__inputStyle();
            TextInput.onChange(() => {
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.width(StyleConstants.FULL_PARENT);
            Line.height({ "id": 16777387, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Line.margin({
                left: { "id": 16777388, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777389, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            Line.backgroundColor({ "id": 16777320, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777283, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            TextInput.maxLength(StyleConstants.INPUT_PASSWORD_LENGTH);
            TextInput.type(InputType.Password);
            __TextInput__inputStyle();
            TextInput.onChange(() => {
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Line.create();
            Line.width(StyleConstants.FULL_PARENT);
            Line.height({ "id": 16777387, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Line.margin({
                left: { "id": 16777388, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" },
                right: { "id": 16777389, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            Line.backgroundColor({ "id": 16777320, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            if (!isInitialRender) {
                Line.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: ('确认密码') });
            TextInput.maxLength(StyleConstants.INPUT_PASSWORD_LENGTH);
            TextInput.type(InputType.Password);
            __TextInput__inputStyle();
            TextInput.onChange(() => {
            });
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Column.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel('注册');
            Button.type(ButtonType.Capsule);
            Button.height({ "id": 16777394, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.fontSize({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.width(StyleConstants.FULL_PARENT);
            Button.fontWeight(FontWeight.Medium);
            Button.margin({ top: '50vp' });
            Button.onClick(() => {
                console.log("click register button");
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new RegisterPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=RegisterPage.js.map