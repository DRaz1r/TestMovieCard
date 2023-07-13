let newimage=new LocalStorage()

@Entry(newimage)
@Component
struct TOvideoCard {
  @LocalStorageProp('topMovieImage') vi: Resource = ($r('app.media.ic_logo'));
  @LocalStorageProp('topIndex') in: string='';
  /*
   * The action type.
   */
  readonly ACTION_TYPE: string = 'router';

  /*
   * The ability name.
   */
  readonly ABILITY_NAME: string = 'Entryvideoability';

  /*
   * The with percentage setting.
   */
  readonly FULL_WIDTH_PERCENT: string = '100%';
  readonly LITTLE_WIDTH_PERCENT: string = '10%';

  /*
   * The height percentage setting.
   */
  readonly FULL_HEIGHT_PERCENT: string = '100%';
  readonly LITTLE_HEIGHT_PERCENT: string = '10%';
  /*
   * The opacity of refresh button.
   */
  readonly REFRESH_OPACITY: number = 0.15;
  /*
   * The margin of refresh button.
   */
  readonly REFRESH_MARGIN: string = '8vp';
  build() {
    Column() {
      Stack( {alignContent: Alignment.TopEnd}) {
        Image(this.vi)
          .objectFit(ImageFit.Cover)
          .width(this.FULL_WIDTH_PERCENT)
          .height(this.FULL_HEIGHT_PERCENT)
          .onClick(() => {
            console.log("image uri" + this.vi)
            postCardAction(this, {
              "action": this.ACTION_TYPE,
              "abilityName": this.ABILITY_NAME,
              "params": {
                "index":this.in
              }
            });
          })
        Image($r('app.media.ic_refresh'))
          .width(this.LITTLE_WIDTH_PERCENT)
          .height(this.LITTLE_HEIGHT_PERCENT)
          .opacity(this.REFRESH_OPACITY)
          .margin({top: this.REFRESH_MARGIN, right: this.REFRESH_MARGIN})
          .onClick(() => {
            console.log("click the refresh button");
            postCardAction(this, {
              'action': 'message',
              'params': {
                'msgTest': 'messageEventByVideo'
              }
            });
          })
      }
    }
    .height(this.FULL_HEIGHT_PERCENT)
    .backgroundColor($r("app.color.card_background"))
  }
}


