let cardstorage=new LocalStorage()

@Entry(cardstorage)
@Component
struct WebShopCard {
  @LocalStorageProp('topTitle') tt: string = '666';
  @LocalStorageProp('bottomTitle') bt: string = '777';
  @LocalStorageProp('topMovieImage') ti: Resource = ($r('app.media.ic_logo'));
  @LocalStorageProp('bottomMovieImage') bi: Resource=($r('app.media.ic_logo'));
  @LocalStorageProp('bottomUrl') burl: string = '';
  @LocalStorageProp('topUrl') turl: string = '';
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
  readonly ABILITY_NAME: string = 'EntryShopAbility';

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
  readonly TARGET_TEXT_OPACITY: number = 0.6;

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
            right: $r('app.float.card_padding')
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
            .margin({left: '10vp', top: '10vp' })
          Text(('立即购票'))
            .fontWeight(FontWeight.Bolder)
            .fontSize($r("app.float.see_button_size"))
            .textAlign(TextAlign.Center)
            .fontColor(Color.White)
            .borderRadius($r("app.float.see_button_radius"))
            .alignSelf(ItemAlign.Start)
            .backgroundColor(Color.Pink)
            .width('45%')
            .height($r("app.float.see_button_height"))
            .margin({top: '10vp', right: '10vp', left: '10vp' })
            .textAlign(TextAlign.Center)
            .onClick(() => {
              postCardAction(this, {
                "action": this.ACTION_TYPE,
                "abilityName": this.ABILITY_NAME,
                "params": {
                  "index": this.turl
                }
              });
            })
        }
      }
      .height(this.HALF_HEIGHT_PERCENT)


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
            right: $r('app.float.card_padding')
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
            .margin({left: '10vp', top: '10vp' })


          Text(('立即购票'))
            .fontWeight(FontWeight.Bolder)
            .fontSize($r("app.float.see_button_size"))
            .textAlign(TextAlign.Center)
            .fontColor(Color.White)
            .borderRadius($r("app.float.see_button_radius"))
            .alignSelf(ItemAlign.Start)
            .backgroundColor(Color.Pink)
            .width('45%')
            .height($r("app.float.see_button_height"))
            .textAlign(TextAlign.Center)
            .margin({top: '10vp', right: '10vp', left: '10vp' })
            .onClick(() => {
              postCardAction(this, {
                "action": this.ACTION_TYPE,
                "abilityName": this.ABILITY_NAME,
                "params": {
                  "index": this.burl
                }
              });
            })
        }
      }
      .height(this.HALF_HEIGHT_PERCENT)

    }
    .backgroundColor($r("app.color.card_background"))
    .height(this.FULL_HEIGHT_PERCENT)
  }
}