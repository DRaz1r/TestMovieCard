import StyleConstants from '../common/constants/StyleConstants';
import router from '@ohos.router';

@Entry
@Component
struct SecondPage {
  @State isSend: boolean = false;

  build() {
    Column() {
      Row() {
        Button({type: ButtonType.Circle, stateEffect: true}) {
          Image($r ('app.media.ic_back'))
        }
        .height($r('app.float.other_login_image_size'))
        .width($r('app.float.other_login_image_size'))
        .backgroundColor($r('app.color.background'))
        .onClick(() => {
          router.back()
          console.log("Click back button")
        })
      }
      .width('100%')
      .height('10%')
      Row() {

        Text('手机号登陆')
          .fontSize(25)
          .fontStyle(FontStyle.Normal)
          .letterSpacing(1)
          .textAlign(TextAlign.Start)
          .padding(10)
      }
      .width('100%')
      .height('10%')

      Column() {
        TextInput({placeholder: $r('app.string.phone_number') })
          .type(InputType.Number)
          .inputStyle()
          .width('260.00vp')

        Button( this.isSend ? '请稍后再试' : '发送短信到您的手机')
          .width('255vp')
          .height($r('app.float.login_button_height'))
          .fontSize($r('app.float.normal_text_size'))
          .fontWeight(FontWeight.Medium)
          .backgroundColor($r('app.color.login_button_color'))
          .margin({
            top: ('15vp'),
            bottom: $r('app.float.login_button_bottom')
          })
          .type(ButtonType.Capsule)
          .onClick(() => {
            this.isSend = !this.isSend
            console.log('Send Message');
          })
        Row() {
          Radio({ value: 'Radio1', group: 'radioGroup' }).checked(false)
            .height(30)
            .width(50)

          Text('我已阅读并同意')
            .fontSize('16fp')
          Text('服务条款')
            .fontColor(Color.Blue)
            .fontSize('16fp')
          Text('和')
            .fontSize('16fp')
          Text('隐私政策')
            .fontColor(Color.Blue)
            .fontSize('16fp')
        }
        .width('100%')
        .height('10%')


      }

    }
    .height('100%')
    .backgroundColor($r('app.color.background'))
    .width('100%')
  }
}

@Extend(TextInput) function inputStyle() {
  .placeholderColor($r('app.color.placeholder_color'))
  .height($r('app.float.login_input_height'))
  .fontSize($r('app.float.normal_text_size'))
  .backgroundColor(Color.White)
  .margin({ top: $r('app.float.input_margin_top') })
  .padding({ left: StyleConstants.INPUT_PADDING_LEFT })
}