@Component
export struct Collect {
  private content: string;
  @State isComplete: boolean = false;

  @Builder labelIcon(icon) {
    Image(icon)
      .objectFit(ImageFit.Contain)
      .width('28vp')
      .height('28vp')
    //.margin({top:'15vp'})
  }

  build() {
    Column() {

      if (this.isComplete) {
        this.labelIcon($r('app.media.ic_star'));
      } else {
        this.labelIcon($r('app.media.ic_empty_star'));
      }

    }
    .margin({top:'15vp'})
    .backgroundColor($r('app.color.start_window_background'))
    .width('28vp')
    .height('28vp')
    //点击操作
    .onClick(() => {
      //待添加数据库
      this.isComplete = !this.isComplete;
    })
  }
}