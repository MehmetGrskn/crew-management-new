import { Component, OnInit } from '@angular/core';
import { CrewService } from '../../services/crew.service';
import { CommonModule } from '@angular/common';


import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    CommonModule
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
  constructor(private crewService: CrewService) {}

  ngOnInit(): void {
    this.crewData = this.crewService.getCrewData();
  }
  calculateTotalIncome(dailyRate: number, daysOnBoard: number, currency: string): number {
    const totalIncome = dailyRate * daysOnBoard;
    return totalIncome;
  }
}

