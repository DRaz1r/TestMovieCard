import StyleConstants from '@bundle:com.huawei.moviecard/entry/ets/common/constants/StyleConstants';
import router from '@ohos:router';
class SecondPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1) {
        super(parent, __localStorage, elmtId);
        this.__isSend = new ObservedPropertySimplePU(false, this, "isSend");
        this.setInitiallyProvidedValue(params);
    }
    setInitiallyProvidedValue(params) {
        if (params.isSend !== undefined) {
            this.isSend = params.isSend;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__isSend.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__isSend.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get isSend() {
        return this.__isSend.get();
    }
    set isSend(newValue) {
        this.__isSend.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            Column.height('100%');
            Column.backgroundColor({ "id": 16777314, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Column.width('100%');
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
            Row.width('100%');
            Row.height('10%');
            if (!isInitialRender) {
                Row.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('手机号登陆');
            Text.fontSize(25);
            Text.fontStyle(FontStyle.Normal);
            Text.letterSpacing(1);
            Text.textAlign(TextAlign.Start);
            Text.padding(10);
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Column.create();
            if (!isInitialRender) {
                Column.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            TextInput.create({ placeholder: { "id": 16777284, "type": 10003, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
            TextInput.type(InputType.Number);
            __TextInput__inputStyle();
            TextInput.width('260.00vp');
            if (!isInitialRender) {
                TextInput.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Button.createWithLabel(this.isSend ? '请稍后再试' : '发送短信到您的手机');
            Button.width('255vp');
            Button.height({ "id": 16777394, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.fontSize({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.fontWeight(FontWeight.Medium);
            Button.backgroundColor({ "id": 16777323, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
            Button.margin({
                top: ('15vp'),
                bottom: { "id": 16777393, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" }
            });
            Button.type(ButtonType.Capsule);
            Button.onClick(() => {
                this.isSend = !this.isSend;
                console.log('Send Message');
            });
            if (!isInitialRender) {
                Button.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Button.pop();
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
            Radio.create({ value: 'Radio1', group: 'radioGroup' });
            Radio.checked(false);
            Radio.height(30);
            Radio.width(50);
            if (!isInitialRender) {
                Radio.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('我已阅读并同意');
            Text.fontSize('16fp');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('服务条款');
            Text.fontColor(Color.Blue);
            Text.fontSize('16fp');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('和');
            Text.fontSize('16fp');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        this.observeComponentCreation((elmtId, isInitialRender) => {
            ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
            Text.create('隐私政策');
            Text.fontColor(Color.Blue);
            Text.fontSize('16fp');
            if (!isInitialRender) {
                Text.pop();
            }
            ViewStackProcessor.StopGetAccessRecording();
        });
        Text.pop();
        Row.pop();
        Column.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
function __TextInput__inputStyle() {
    TextInput.placeholderColor({ "id": 16777330, "type": 10001, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.height({ "id": 16777400, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.fontSize({ "id": 16777428, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" });
    TextInput.backgroundColor(Color.White);
    TextInput.margin({ top: { "id": 16777380, "type": 10002, params: [], "bundleName": "com.huawei.moviecard", "moduleName": "entry" } });
    TextInput.padding({ left: StyleConstants.INPUT_PADDING_LEFT });
}
ViewStackProcessor.StartGetAccessRecordingFor(ViewStackProcessor.AllocateNewElmetIdForNextComponent());
loadDocument(new SecondPage(undefined, {}));
ViewStackProcessor.StopGetAccessRecording();
//# sourceMappingURL=LoginMessagePage.js.map