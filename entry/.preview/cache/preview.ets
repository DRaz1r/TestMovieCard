struct preview{build(){Image($r ('app.media.right_grey'))
          .borderRadius($r("app.float.see_button_radius"))
          .margin({ right: $r('app.float.see_button_right') })
          .width('45vp')
          .height('20vp')
          .onClick(() => {
            router.pushUrl({
              url: CommonConstants.SEE_BUTTON_PUSH,
              params: {
                index: this.sort
              }
            }).catch((error) => {
              Logger.error(CommonConstants.TAG_MOVIE_ITEM, 'push error ' + JSON.stringify(error));
            });
          })}}