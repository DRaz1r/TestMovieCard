import CommonConstants from '../common/constants/CommonConstants';

/**
 * Custom pop-up window.
 */
@Preview
@CustomDialog
export default struct CustomDialogComponent {
  controller: CustomDialogController;
  cancel: () => void;
  confirm: () => void;

  build() {
    Column() {
      Text($r('app.string.dialog_text_title'))
        .width(CommonConstants.DIALOG_COMPONENT_WIDTH_PERCENT)
        .fontColor($r('app.color.dialog_text_color'))
        .fontSize($r('app.float.dialog_text_privacy_size'))
        .textAlign(TextAlign.Center)
        .fontWeight(CommonConstants.DIALOG_TITLE_FONT_WEIGHT)
        .margin({
          top: $r('app.float.dialog_text_privacy_top'),
          bottom: $r('app.float.dialog_text_privacy_bottom')
        })
      Text($r('app.string.app_open_warn_1'))
        .fontSize($r('app.float.dialog_common_text_size'))
        .width(CommonConstants.DIALOG_COMPONENT_WIDTH_PERCENT)
        .margin({top: $r('app.float.dialog_content_margin_top'),
            bottom: $r('app.float.dialog_content_margin_bottom')})
      Text($r('app.string.app_open_warn_2'))
        .fontSize($r('app.float.dialog_common_text_size'))
        .width(CommonConstants.DIALOG_COMPONENT_WIDTH_PERCENT)
      Row() {
        Text($r('app.string.dialog_button_disagree'))
          .fancy()
          .onClick(() => {
            this.controller.close();
            this.cancel();
          })
        Blank()
          .backgroundColor($r('app.color.dialog_blank_background_color'))
          .width($r('app.float.dialog_blank_width'))
          .height($r('app.float.dialog_blank_height'))
        Text($r('app.string.dialog_button_agree'))
          .fancy()
          .onClick(() => {
            this.controller.close();
            this.confirm();
          })
      }
      .margin({ bottom: CommonConstants.DIALOG_ROW_MARGIN_BOTTOM ,
      top: CommonConstants.DIALOG_ROW_MARGIN_TOP})
    }
    .width(CommonConstants.DIALOG_WIDTH_PERCENT)
    .borderRadius(CommonConstants.DIALOG_BORDER_RADIUS)
    .backgroundColor(Color.White)
  }
}

// Common text styles.
@Extend(Text) function fancy () {
  .fontColor($r("app.color.dialog_fancy_text_color"))
  .fontSize($r("app.float.dialog_fancy_text_size"))
  .textAlign(TextAlign.Center)
  .fontWeight(FontWeight.Medium)
  .layoutWeight(CommonConstants.COMMON_LAYOUT_WEIGHT)
}