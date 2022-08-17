import { Component, OnInit } from '@angular/core';
import { TableItem } from 'src/app/interface/table-item';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.scss'],
})
export class MainTableComponent implements OnInit {
  tableList: TableItem[] = [];
  filtredTableList: TableItem[] = [];

  constructor(private helperService: HelperService) {}

  ngOnInit(): void {
    this.getMockData();
    this.watchSearchText();
  }

  private watchSearchText() {
    this.helperService.currentSearchText.subscribe((searchText: string) => {
      this.filterList(searchText);
    });
  }

  private filterList(searchText: string) {
    this.filtredTableList = this.tableList.filter((val) =>
      val.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  private getMockData() {
    this.helperService.getMockDataFromJSON().subscribe((result) => {
      this.tableList = result;
      this.filtredTableList = result;
    });
  }
}
