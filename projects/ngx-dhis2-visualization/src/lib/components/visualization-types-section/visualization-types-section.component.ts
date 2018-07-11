import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TABLE_ICON } from '../../icons';

@Component({
  selector: 'app-visualization-types-section',
  templateUrl: './visualization-types-section.component.html',
  styleUrls: ['./visualization-types-section.component.css']
})
export class VisualizationTypesSectionComponent implements OnInit {
  @Input() currentVisualization: string;
  @Output()
  visualizationTypeChange: EventEmitter<string> = new EventEmitter<string>();
  @Output() onToggleInterpretation = new EventEmitter();

  tableIcon: string;

  constructor() {
    this.tableIcon = TABLE_ICON;
  }

  ngOnInit() {}

  onVisualizationSelect(e, type) {
    e.stopPropagation();
    this.visualizationTypeChange.emit(type);
  }

  toggleInterpretaion(e) {
    e.stopPropagation();
    this.onToggleInterpretation.emit();
  }
}
