import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ImageViewerMaskComponent } from "./components/image-viewer-mask/image-viewer-mask.component";

@NgModule({
  declarations: [AppComponent, ImageViewerMaskComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
