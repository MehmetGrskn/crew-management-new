import { Component, OnInit, ViewChild } from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CommonModule } from '@angular/common';


import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { CrewAddComponent } from '../crew-add/crew-add.component';

@Component({
  selector: 'app-home',
  imports: [
    RouterModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    CommonModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  crewData: any[] = [];
  // displayedColumns: string[] = ['firstName', 'lastName', 'nationality', 'action'];
  displayedColumns: 
  string[] = [
    'firstName', 
    'lastName', 
    'nationality', 
    'title' , 
    'daysOnBoard' , 
    'dailyRate' , 
    'currency' , 
    'totalIncome',
    'action'];


    
  constructor(
    private crewService: CrewService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.crewData = this.crewService.getCrewData();
    console.log("ngoninit called");
    
  }

  calculateTotalIncome(dailyRate: number, daysOnBoard: number, currency: string): number {
    const totalIncome = dailyRate * daysOnBoard;
    return totalIncome;
  }
  
  openAddCrewDialog(): void {
    const dialogRef = this.dialog.open(CrewAddComponent, {
      width: '500px',
    });

    dialogRef.afterClosed().subscribe(result => {
      // Do something after the dialog closes, e.g., refresh the list
      console.log('Crew dialog was closed');
      console.log("Nwe crew data: ", this.crewService.getCrewData());
      this.crewData = [...this.crewService.getCrewData()];

    });
  }
}

