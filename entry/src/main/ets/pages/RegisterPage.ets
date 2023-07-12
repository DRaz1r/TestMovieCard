import StyleConstants from '../common/constants/StyleConstants'
import router from '@ohos.router'


@Extend(TextInput) function inputStyle() {
  .placeholderColor($r('app.color.placeholder_color'))
  .height($r('app.float.login_input_height'))
  .fontSize($r('app.float.normal_text_size'))
  .backgroundColor(Color.White)
  .margin({ top: $r('app.float.input_margin_top') })
  .padding({ left: StyleConstants.INPUT_PADDING_LEFT })
}

@Entry
@Component
struct RegisterPage {

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
        Image($r('app.media.ic_register'))
          .height($r('app.float.other_login_image_size'))
          .width($r('app.float.other_login_image_size'))
          .backgroundColor($r('app.color.background'))
          .margin('10vp')

      }
      .height('30%')
      Column() {
        TextInput({ placeholder: $r('app.string.account') })
          .maxLength(StyleConstants.INPUT_ACCOUNT_LENGTH)
          .type(InputType.Number)
          .inputStyle()
          .onChange(() => {
          })

        Line()
          .width(StyleConstants.FULL_PARENT)
          .height($r('app.float.line_height'))
          .margin({
            left: $r('app.float.line_margin_left'),
            right: $r('app.float.line_margin_right')
          })
          .backgroundColor($r('app.color.line_color'))

        TextInput({ placeholder: $r('app.string.password') })
          .maxLength(StyleConstants.INPUT_PASSWORD_LENGTH)
          .type(InputType.Password)
          .inputStyle()
          .onChange(() => {
          })
        Line()
          .width(StyleConstants.FULL_PARENT)
          .height($r('app.float.line_height'))
          .margin({
            left: $r('app.float.line_margin_left'),
            right: $r('app.float.line_margin_right')
          })
          .backgroundColor($r('app.color.line_color'))

        TextInput({ placeholder:('确认密码') })
          .maxLength(StyleConstants.INPUT_PASSWORD_LENGTH)
          .type(InputType.Password)
          .inputStyle()
          .onChange(() => {
          })
      }
      .backgroundColor(Color.White)
      .borderRadius($r('app.float.login_input_radius'))

      Button('注册')
        .type(ButtonType.Capsule)
        .height($r('app.float.login_button_height'))
        .fontSize($r('app.float.normal_text_size'))
        .width(StyleConstants.FULL_PARENT)
        .fontWeight(FontWeight.Medium)
        .margin({ top: '50vp' })
        .onClick(() => {
          console.log("click register button");
        })
    }
    .padding({
      left: $r('app.float.login_button_left'),
      right: $r('app.float.login_button_right'),
      bottom: $r('app.float.login_page_padding_bottom')
    })
    .backgroundColor($r('app.color.background'))
    .height('100%')
  }
}