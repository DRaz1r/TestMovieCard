import web_webview from '@ohos.web.webview'


@Entry
@Component
struct WebComponent {
  @State src: string = globalThis.position;
  controller: web_webview.WebviewController = new web_webview.WebviewController()
  build() {
    Column() {
      Web({ src: this.src, controller: this.controller })
    }
  }
}