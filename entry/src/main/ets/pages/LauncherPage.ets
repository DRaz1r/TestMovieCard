import common from '@ohos.app.ability.common';
import preferences from '@ohos.data.preferences';
import router from '@ohos.router';
import Logger from '../common/utils/Logger';
import CommonConstants from '../common/constants/CommonConstants';
import CustomDialogComponent from '../view/CustomDialogComponent';

/**
 * The LauncherPage is the entry point of the application and shows how to develop the LauncherPage.
 * Stay on the LauncherPage for a few seconds to jump to the AdvertisingPage.
 * Developers can replace the background image.
 */
@Entry
@Component
struct LauncherPage {
  private context: common.UIAbilityContext;
  private timerId: number = 0;
  private isJumpToAdvertising: boolean = false;
  dialogController: CustomDialogController = new CustomDialogController({
    builder: CustomDialogComponent(
      {
        cancel: this.onCancel.bind(this),
        confirm: this.onConfirm.bind(this)
      }),
    alignment: DialogAlignment.Bottom,
    offset: { dx: 0, dy: CommonConstants.DIALOG_CONTROLLER_DY_OFFSET },
    customStyle: true,
    autoCancel: false
  });

  onCancel() {
    // Exit the application.
    this.context.terminateSelf();
  }

  onConfirm() {
    // Save privacy agreement status.
    this.saveIsPrivacy();
    this.jumpToAdvertisingPage();
  }

  onPageHide() {
    if (this.isJumpToAdvertising) {
      router.clear();
    }
    globalThis.isJumpPrivacy = true;
    clearTimeout(this.timerId);
  }

  /**
   * Jump to advertising page.
   */
  jumpToAdvertisingPage() {
    this.timerId = setTimeout(() => {
      this.isJumpToAdvertising = true;
      router.pushUrl({
        url: CommonConstants.ADVERTISING_PAGE_URL
      }).catch((error) => {
        Logger.error(CommonConstants.LAUNCHER_PAGE_TAG, 'LauncherPage pushUrl error ' + JSON.stringify(error));
      });
    }, CommonConstants.LAUNCHER_DELAY_TIME);
  }

  saveIsPrivacy() {
    let preferences: Promise<preferences.Preferences> = this.getDataPreferences();
    preferences.then((result: preferences.Preferences) => {
      let privacyPut = result.put(CommonConstants.PREFERENCES_KEY_PRIVACY, false);
      result.flush();
      privacyPut.then(() => {
        Logger.info(CommonConstants.LAUNCHER_PAGE_TAG, 'Put the value of startup Successfully.');
      }).catch((err) => {
        Logger.error(CommonConstants.LAUNCHER_PAGE_TAG, 'Put the value of startup Failed, err: ' + err);
      });
    }).catch((err) => {
      Logger.error(CommonConstants.LAUNCHER_PAGE_TAG, 'Get the preferences Failed, err: ' + err);
    });
  }

  onPageShow() {
    this.context = getContext(this) as common.UIAbilityContext;
    // Get the operation class for saving data.
    this.getDataPreferences().then((preferences: preferences.Preferences) => {
      preferences.get(CommonConstants.PREFERENCES_KEY_PRIVACY, true).then((value: preferences.ValueType) => {
        Logger.info(CommonConstants.LAUNCHER_PAGE_TAG, 'onPageShow value: ' + value);
        if (value) {
          let isJumpPrivacy: boolean = globalThis.isJumpPrivacy ?? false;
          if (!isJumpPrivacy) {
            this.dialogController.open();
          }
        } else {
          console.log('jump to the ad page');
          this.jumpToAdvertisingPage();
        }
      });
    });
  }

  /**
   * Get data preferences action.
   */
  getDataPreferences() {
    return preferences.getPreferences(this.context, CommonConstants.PREFERENCES_FILE_NAME);
  }

  build() {
    Stack() {
      Image($r('app.media.ic_launcher_background'))
        .width(CommonConstants.FULL_WIDTH)
        .height(CommonConstants.FULL_HEIGHT)
      Column() {
        Image($r('app.media.ic_applogo'))
          .width($r('app.float.launcher_logo_size'))
          .height($r('app.float.launcher_logo_size'))
          .margin({ top: CommonConstants.LAUNCHER_IMAGE_MARGIN_TOP })
        Text($r('app.string.film_launcher_title'))
          .width($r('app.float.launcher_life_text_width'))
          .height($r('app.float.launcher_life_text_height'))
          .FilmTextStyle(FontWeight.Bold,
            CommonConstants.LAUNCHER_LIFE_TEXT_SPACING,
            $r('app.float.launcher_text_title_size'),
            $r('app.color.launcher_text_title_color'))
          .margin({ top: CommonConstants.LAUNCHER_TEXT_TITLE_MARGIN_TOP })
        Text($r('app.string.film_launcher_content'))
          .height(CommonConstants.LAUNCHER_TEXT_INTRODUCE_HEIGHT)
          .FilmTextStyle(FontWeight.Normal,
            CommonConstants.LAUNCHER_TEXT_INTRODUCE_SPACING,
            $r('app.float.launcher_text_introduce_size'),
            $r('app.color.launcher_text_introduce_color'))
          .opacity($r('app.float.launcher_text_opacity'))
          .margin({ top: CommonConstants.LAUNCHER_TEXT_INTRODUCE_MARGIN_TOP })
      }
      .height(CommonConstants.FULL_HEIGHT)
      .width(CommonConstants.FULL_WIDTH)
    }
  }
}
// Healthy living text common styles.
@Extend(Text) function FilmTextStyle(fontWeight: number, textAttribute: number, fontSize: Resource, fontColor: Resource) {
  .fontWeight(fontWeight)
  .letterSpacing(textAttribute)
  .fontSize(fontSize)
  .fontColor(fontColor)
}