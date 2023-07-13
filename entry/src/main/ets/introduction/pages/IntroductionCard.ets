let cardstorage=new LocalStorage()


@Entry(cardstorage)
@Component
struct IntroductionCard {
  @LocalStorageProp('topTitle') tt: string = '123456';
  @LocalStorageProp('topDescribe') td: string = '78910';
  @LocalStorageProp('bottomTitle') bt: string = '6666';
  @LocalStorageProp('bottomDescribe') bd: string = '9999';
  @LocalStorageProp('topMovieImage') ti: Resource = ($r('app.media.ic_logo'));
  @LocalStorageProp('bottomMovieImage') bi: Resource = ($r('app.media.ic_logo'));
  @LocalStorageProp('bottomIndex') bin: number = 0;
  @LocalStorageProp('topIndex') tin: number = 0;
  /*
   * The title.
   */
  /*
   * The action type.
   */
  readonly ACTION_TYPE: string = 'router';

  /*
   * The ability name.
   */
  readonly ABILITY_NAME: string = 'EntryDetailsAbility';

  /*
   * The message.
   */
  readonly MESSAGE: string = 'add detail';

  /*
   * The with percentage setting.
   */
  readonly FULL_WIDTH_PERCENT: string = '100%';

  /*
   * The height percentage setting.
   */
  readonly FULL_HEIGHT_PERCENT: string = '100%';
  readonly HALF_HEIGHT_PERCENT: string = '50%';
  readonly TARGET_TEXT_OPACITY: number = 0.8;
  readonly DESCRIBTION_LEFT_MARGIN: string = '10vp';
  readonly DESCRIBTION_TOP_MARGIN: string = '10vp';
  build() {
    Column() {
      Row() {
        Image(this.ti)
          .objectFit(ImageFit.Cover)
          .height(this.FULL_HEIGHT_PERCENT)
          .width($r("app.float.introduction_image_width"))
          .padding({
            top: $r('app.float.agency_row_padding'),
            bottom: $r('app.float.agency_row_padding'),
            left: $r('app.float.card_padding'),
            right:$r('app.float.card_padding')
          })
          .borderRadius(10)
        Column() {
          Text(this.tt)
            .fontSize(14)
            .fontColor($r("app.color.start_window_background"))
            .fontWeight(500)
            .width(this.FULL_WIDTH_PERCENT)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .maxLines(1)
            .lineHeight(19)
          Text(this.td)
            .fontColor($r("app.color.start_window_background"))
            .fontSize(12)
            .fontWeight(400)
            .width(this.FULL_WIDTH_PERCENT)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .maxLines(1)
            .lineHeight(16)
            .margin({left: this.DESCRIBTION_LEFT_MARGIN,
              top: this.DESCRIBTION_TOP_MARGIN})
        }
      }
      .height(this.HALF_HEIGHT_PERCENT)
      .onClick(() => {
        postCardAction(this, {
          "action": this.ACTION_TYPE,
          "abilityName": this.ABILITY_NAME,
          "params": {
            "index": this.tin
          }
        });
      })

      Row() {
        Image(this.bi)
          .width($r("app.float.introduction_image_width"))
          .height($r("app.float.introduction_image_height"))
          .objectFit(ImageFit.Cover)
          .height(this.FULL_HEIGHT_PERCENT)
          .padding({
            top: $r('app.float.agency_row_padding'),
            bottom: $r('app.float.agency_row_padding'),
            left: $r('app.float.card_padding'),
            right:$r('app.float.card_padding')
          })
          .borderRadius(10)
        Column() {
          Text(this.bt)
            .fontSize(14)
            .fontColor($r("app.color.start_window_background"))
            .fontWeight(500)
            .width(this.FULL_WIDTH_PERCENT)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .maxLines(1)
            .lineHeight(19)

          Text(this.bd)
            .fontColor($r("app.color.start_window_background"))
            .fontSize(12)
            .fontWeight(400)
            .textOverflow({ overflow: TextOverflow.Ellipsis })
            .maxLines(1)
            .width(this.FULL_WIDTH_PERCENT)
            .lineHeight(16)
            .margin({left: this.DESCRIBTION_LEFT_MARGIN,
              top: this.DESCRIBTION_TOP_MARGIN})
        }
      }
      .height(this.HALF_HEIGHT_PERCENT)
      .onClick(() => {
        postCardAction(this, {
          "action": this.ACTION_TYPE,
          "abilityName": this.ABILITY_NAME,
          "params": {
            "index": this.bin
          }
        });
      })
    }
    .opacity(this.TARGET_TEXT_OPACITY)
    .backgroundColor($r("app.color.card_background"))
    .height(this.FULL_HEIGHT_PERCENT)
  }
}