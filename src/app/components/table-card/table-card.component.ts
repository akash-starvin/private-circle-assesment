import { Component, Input, OnInit } from '@angular/core';
import { TableItem } from 'src/app/interface/table-item';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-table-card',
  templateUrl: './table-card.component.html',
  styleUrls: ['./table-card.component.scss'],
})
export class TableCardComponent implements OnInit {
  @Input()
  card!: TableItem;

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {}

  viewDetails(list: string[]) {
    this.helperService.setDetailsList(list);
  }
}
