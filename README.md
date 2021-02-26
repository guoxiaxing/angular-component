# angular-component

## 运行 demo

```
cd demo
npm start
```

## app-image-viewer-mask

一个图片预览组件。传入图片的 url 即可实现图片的全屏预览

使用方式

```
<app-image-viewer-mask *ngIf="previewImage" [imageUrl]="imagUrl" (close)="onCloseView()"></app-image-viewer-mask>

```

父组件中定义一个属性&一个方法用于控制组件展示

```
previewImage = false;
onCloseView() {
    this.previewImage = false;
}
```
