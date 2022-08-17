import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { TableCardComponent } from './components/table-card/table-card.component';
import { DetailsListComponent } from './components/details-list/details-list.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    TableCardComponent,
    DetailsListComponent,
    PageHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
