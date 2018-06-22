import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-visualization-resize-section',
  templateUrl: './visualization-resize-section.component.html',
  styleUrls: ['./visualization-resize-section.component.css']
})
export class VisualizationResizeSectionComponent implements OnInit {

  @Input() id: string;
  @Input() showResizeButton: boolean;
  @Input() fullScreen: boolean;

  @Output() toggleFullScreen: EventEmitter<string> = new EventEmitter<string>();
  @Output() resizeCard: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onToggleFullScreen(e) {
    e.stopPropagation();
    this.toggleFullScreen.emit(this.id);
  }

  onResizeCard(e?) {
    if (e) {
      e.stopPropagation();
    }
    this.resizeCard.emit(this.id);
  }

}
