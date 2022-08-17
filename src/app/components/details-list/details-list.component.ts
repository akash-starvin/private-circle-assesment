import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-details-list',
  templateUrl: './details-list.component.html',
  styleUrls: ['./details-list.component.scss'],
})
export class DetailsListComponent implements OnInit {
  detailsList: string[] = [];

  constructor(private helperService: HelperService) {}

  ngOnInit() {
    this.helperService.currentData.subscribe(
      (result: any) => (this.detailsList = result)
    );
  }
}
