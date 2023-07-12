import web_webview from '@ohos.web.webview'
import router from '@ohos.router'

@Entry
@Component
struct WebComponent {
  @State src: string = router.getParams()?.['weburl'];
  controller: web_webview.WebviewController = new web_webview.WebviewController()
  build() {
    Column() {
      Web({ src: this.src, controller: this.controller })
    }
  }
}