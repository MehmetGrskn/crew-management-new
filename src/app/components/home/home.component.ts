import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CrewAddComponent } from '../crew-add/crew-add.component';
import { MatPaginator } from '@angular/material/paginator';
import { CrewEditComponent } from '../crew-edit/crew-edit.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    CommonModule,
    MatPaginator,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  crewData: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'firstName', 
    'lastName', 
    'nationality', 
    'title', 
    'daysOnBoard', 
    'dailyRate', 
    'currency', 
    'totalIncome',
    'action'
  ];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null = null; // Değişiklik: null olarak başlatıyoruz

  constructor(
    private crewService: CrewService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.crewData = new MatTableDataSource(this.crewService.getCrewData());
    console.log("ngOnInit called");
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.crewData.paginator = this.paginator; // Paginator'ı bağla
    }
  }

  calculateTotalIncome(dailyRate: number, daysOnBoard: number, currency: string): number {
    return dailyRate * daysOnBoard;
  }

  openAddCrewDialog(): void {
    const dialogRef = this.dialog.open(CrewAddComponent, {
      width: '500px',
    });
    

    dialogRef.afterClosed().subscribe(result => {
      this.crewData.data = this.crewService.getCrewData(); // Yeni verileri güncelle
    });
  }

  deleteCrew(crewId: number): void {
    this.crewService.deleteCrew(crewId);
    this.crewData.data = this.crewService.getCrewData(); // Yeni verileri güncelle
  }

  openEditCrewDialog(crew: any): void {
    const dialogRef = this.dialog.open(CrewEditComponent, {
      width: '500px',
      data: { ...crew }, // Seçilen tayfanın verilerini gönder
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Gelen yeni veriyi güncelleyin
        const index = this.crewData.data.findIndex(item => item.id === crew.id);
        if (index !== -1) {
          this.crewData.data[index] = result;
          this.crewData.data = [...this.crewData.data]; // MatTable'ın değişikliği algılaması için yeni referans
        }
      }
    });
  }
  
}
