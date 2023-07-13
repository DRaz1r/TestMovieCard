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

  /*
   * The height percentage setting.
   */
  readonly FULL_HEIGHT_PERCENT: string = '100%';


  build() {
    Column() {
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
    }
    .height(this.FULL_HEIGHT_PERCENT)
    .backgroundColor($r("app.color.card_background"))
  }
}


