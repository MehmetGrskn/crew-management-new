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
import { FormsModule } from '@angular/forms';
import { CrewCertificatesDialogComponent } from '../crew-certificates/crew-certificates.component';
import { TranslateModule, TranslateService, TranslateStore } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


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
    FormsModule,
    TranslateModule,
    MatToolbarModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  crewData: MatTableDataSource<any> = new MatTableDataSource<any>();
  selectedLang = 'en';
  languages = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'pt', label: 'Portugese' }
  ];
  displayedColumns: string[] = [
    'firstName', 
    'lastName', 
    'nationality', 
    'title', 
    'daysOnBoard', 
    'dailyRate', 
    'currency', 
    'discount',
    'totalIncome',
    'certificates',
    'action'
  ];

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator | null = null; // Değişiklik: null olarak başlatıyoruz

  constructor(
    private crewService: CrewService,
    private dialog: MatDialog,
    private translate: TranslateService,
  ) { 
    this.selectedLang = this.translate.getDefaultLang();
   }
  ngOnInit(): void {
    this.crewData = new MatTableDataSource(this.crewService.getCrewData());
    console.log("ngOnInit called");
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      this.crewData.paginator = this.paginator; // Paginator'ı bağla
    }
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

  // Discount'u güncelleyen fonksiyon
  updateTotalIncome(element: any): void {
    element.totalIncome = this.calculateTotalIncome(
      element.dailyRate,
      element.daysOnBoard,
      element.currency,
      element.discount || 0 // Discount yoksa 0 olarak kabul edilir
    );
    this.crewData.data = [...this.crewData.data]; // MatTable'ın değişikliği algılaması için referansı yenile
    this.crewService.updateDiscount(element.id, element.discount); 
  }

  // Total Income hesaplamasına Discount'u ekle
  calculateTotalIncome(
      dailyRate: number,
      daysOnBoard: number,
      currency: string,
      discount: number = 0
    ): number {
      const total = dailyRate * daysOnBoard;
      return Math.max(0, total - discount); // Negatif değere düşmesini engelle
    }
  
  openCertificatesDialog(crew: any): void {
    const dialogRef = this.dialog.open(CrewCertificatesDialogComponent, {
      width: '600px',
      data: crew  // crew verilerini modal'a gönderiyoruz
    });
  }

  changeLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
