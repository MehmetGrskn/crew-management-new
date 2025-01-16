import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';  // Burayı ekleyin
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';




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
    MatPaginatorModule
  ]
})
export class AppModule { }


