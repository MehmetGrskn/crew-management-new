import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';  
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';  
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrewCardComponent } from './components/crew-card/crew-card.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateStore } from '@ngx-translate/core';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
  ],
  imports: [
    AppComponent,
    HomeComponent,
    CommonModule,   
    MatButtonModule,
    MatDialogModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    CrewCardComponent,
    MatFormField,
    FormsModule,
    MatPaginator,
  ],
  providers: []
  
})
export class AppModule {

 }


