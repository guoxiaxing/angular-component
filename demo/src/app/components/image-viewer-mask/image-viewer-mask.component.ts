import { ChangeDetectionStrategy, Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-image-viewer-mask',
    templateUrl: './image-viewer-mask.component.html',
    styleUrls: ['./image-viewer-mask.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageViewerMaskComponent implements OnInit {
    constructor() {}

    @Input() imageUrl: string;
    ngOnInit(): void {
        /* 打开动画结束后才开始监听 */
        if (!this.onKeyboard) {
            setTimeout(function () {
                window.addEventListener('keydown', this.onKeyboardEvent);
                this.onKeyboard = true;
            }, 400);
        }
    }
    @Output() close = new EventEmitter<void>();
    /**
     * 渐隐动画
     */
    vanish = false;
    /**
     * 支持快捷键操作
     */
    onKeyboard = false;
    openWindow() {
        window.open(this.imageUrl);
    }
    tonKeyboardEvent(event) {
        event.preventDefault();
        if (event.keyCode === 27 && this.imageUrl != null) {
            this.closeViewer(); // esc 关闭全屏
        }
    }
    closeViewer() {
        const _this = this;
        this.vanish = true;
        setTimeout(function () {
            _this.vanish = false;
            window.removeEventListener('keydown', this.onKeyboardEvent);
            _this.onKeyboard = false;
            _this.close.emit();
        }, 200); // 关闭动画结束后隐藏
    }

    /**
     * 计算缩略图比例：平铺但成比例缩小
     */
    resolveRatio(event: Event) {
        // @ts-ignore
        const bounding = event.target!.getBoundingClientRect();
        if (bounding.width <= bounding.height) {
            // @ts-ignore
            event.target.style.height = '100%';
        } else {
            // @ts-ignore
            event.target.style.width = '100%';
        }
    }
}
