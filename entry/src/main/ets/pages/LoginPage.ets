
import CommonConstants from '../common/constants/CommonConstants';
import StyleConstants from '../common/constants/StyleConstants';
import CommonUtils from '../common/utils/CommonUtils';
//import MultipleDevicesUtils from '../common/utils/MultipleDevicesUtils';
import router from '@ohos.router';

/**
 * The login page consists of two components.
 * LoginTitle and LoginBottom, which can be invoked by directly referencing the control.
 */
@Entry
@Component
struct LoginPage {
  @StorageProp('currentDeviceSize') currentDeviceSize: string = CommonConstants.SM;

  onPageShow() {
   // MultipleDevicesUtils.register();
  }

  build() {
    GridRow({
      columns: {
        sm: StyleConstants.COLUMNS_SM,
        md: StyleConstants.COLUMNS_MD,
        lg: StyleConstants.COLUMNS_LG
      },
      gutter: {
        x: StyleConstants.GRID_GUTTER
      }
    }) {
      GridCol({
        span: {
          sm: StyleConstants.SPAN_SM,
          md: StyleConstants.SPAN_MD,
          lg: StyleConstants.SPAN_LG
        }, offset: {
          md: StyleConstants.OFFSET_MD,
          lg: StyleConstants.OFFSET_LG
        }
      }) {
        Column() {
          // Title component
          LoginTitle()
          // Bottom component
          LoginBottom()
        }
      }
    }
    .backgroundColor($r('app.color.background'))
  }
}

@Preview
@Component
struct LoginTitle {
  build() {
    Column() {
      Image($r('app.media.ic_applogo'))
        .width($r('app.float.logo_image_size'))
        .height($r('app.float.logo_image_size'))
        .margin({ bottom: $r('app.float.logo_margin_bottom') })
      Text($r('app.string.login_page'))
        .fontSize($r('app.float.common_text_size'))
        .fontWeight(FontWeight.Medium)
        .fontColor($r('app.color.title_text_color'))
      Text($r('app.string.login_more'))
        .fontSize($r('app.float.normal_text_size'))
        .fontColor($r('app.color.more_text_color'))
        .margin({
          top: $r('app.float.more_margin_top'),
          bottom: $r('app.float.more_margin_bottom')
        })
    }
    .backgroundColor($r('app.color.background'))
    .justifyContent(FlexAlign.Center)
    .width(StyleConstants.FULL_PARENT)
    .height(StyleConstants.LOGIN_LOGO_HEIGHT)
  }
}

@Preview
@Component
struct LoginBottom {
  @State account: string = '';
  @State password: string = '';

  @Builder imageButton(src: Resource) {
    Button({ type: ButtonType.Circle, stateEffect: true }) {
      Image(src)
    }
    .height($r('app.float.other_login_image_size'))
    .width($r('app.float.other_login_image_size'))
    .backgroundColor($r('app.color.background'))
  }

  build() {
    Column() {
      Column() {
        TextInput({ placeholder: $r('app.string.account') })
          .maxLength(StyleConstants.INPUT_ACCOUNT_LENGTH)
          .type(InputType.Number)
          .inputStyle()
          .onChange((value: string) => {
            this.account = value;
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
          .onChange((value: string) => {
            this.password = value;
          })
      }
      .backgroundColor(Color.White)
      .borderRadius($r('app.float.login_input_radius'))

      Row() {
        Text($r('app.string.message_login'))
          .blueTextStyle()
          .onClick(() => {
            router.pushUrl({ url: 'pages/LoginMessagePage' })
              .then(() => {
                // success
              })
              .catch(err => {
                console.error(`pushUrl failed, code is ${err.code}, message is ${err.message}`);
              })
          })
        Text($r('app.string.forgot_password'))
          .blueTextStyle()
          .onClick(() => {
            CommonUtils.showToastContent($r('app.string.incomplete_toast'));
          })
      }
      .justifyContent(FlexAlign.SpaceBetween)
      .width(StyleConstants.FULL_PARENT)
      .margin({ top: $r('app.float.forgot_margin_top') })
      .padding({
        left: $r('app.float.forgot_padding_left'),
        right: $r('app.float.forgot_padding_right')
      })

      Button($r('app.string.login'))
        .id(CommonConstants.LOGIN_BUTTON_ID)
        .width(StyleConstants.FULL_PARENT)
        .height($r('app.float.login_button_height'))
        .fontSize($r('app.float.normal_text_size'))
        .fontWeight(FontWeight.Medium)
        .backgroundColor($r('app.color.login_button_color'))
        .margin({
          top: $r('app.float.login_button_top'),
          bottom: $r('app.float.login_button_bottom')
        })
        .onClick(() => {
          CommonUtils.loginArkTS(this.account, this.password);
        })

      Button($r('app.string.register_account'), { type: ButtonType.Capsule })
        .width(StyleConstants.FULL_PARENT)
        .height($r('app.float.register_button_height'))
        .fontSize($r('app.float.normal_text_size'))
        .fontWeight(FontWeight.Medium)
        .backgroundColor($r('app.color.register_button_color'))
        .onClick(() => {
          router.pushUrl({url: 'pages/RegisterPage'})
            .then(() => {

            })
            .catch(err => {
              console.error(`pushUrl failed, code is ${err.code}, message is ${err.message}`);
            })
        })

      Blank()
      Text($r('app.string.other_login_method'))
        .fontColor($r('app.color.other_login_text_color'))
        .fontSize($r('app.float.little_text_size'))
        .fontWeight(FontWeight.Medium)
        .margin({ top: $r('app.float.other_login_margin_top'), bottom: $r('app.float.other_login_margin_bottom') })
      Row({ space: CommonConstants.LOGIN_METHODS_SPACE }) {
        this.imageButton($r('app.media.WeChatLogo'))
        this.imageButton($r('app.media.github_mark'))
        this.imageButton($r('app.media.icon_steam_vr'))
      }

    }
    .padding({
      left: $r('app.float.login_button_left'),
      right: $r('app.float.login_button_right'),
      bottom: $r('app.float.login_page_padding_bottom')
    })
    .backgroundColor($r('app.color.background'))
    .height(StyleConstants.LOGIN_BOTTOM_HEIGHT)
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

@Extend(Text) function blueTextStyle() {
  .fontColor($r('app.color.blue_text_color'))
  .fontSize($r('app.float.small_text_size'))
  .fontWeight(FontWeight.Medium)
}