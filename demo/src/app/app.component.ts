import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "demo";
  previewImage = false;
  onCloseView() {
    this.previewImage = false;
  }
  imageUrl =
    "https://ww1.sinaimg.cn/bmiddle/6a89cbd9ly1go0ra7w1oaj20oh10pkdx.jpg";
  preview() {
    this.previewImage = true;
  }
}
