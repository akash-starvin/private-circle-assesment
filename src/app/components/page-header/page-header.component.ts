import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HelperService } from 'src/app/services/helper.service';
import { debounce, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements OnInit {
  searchInput: String = '';
  valueChanged: Subject<string> = new Subject<string>();

  constructor(private helperService: HelperService) {
    this.valueChanged.pipe(debounceTime(500)).subscribe((val) => {
      this.helperService.setSearchText(val);
    });
  }

  ngOnInit(): void {}

  updateValueChanged(text: string) {
    this.valueChanged.next(text);
  }
}
