import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrewService } from '../../services/crew.service';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-crew-card',
  templateUrl: './crew-card.component.html',
  styleUrls: ['./crew-card.component.scss'],
  imports: [
    MatTabsModule,
    CommonModule]
})
export class CrewCardComponent implements OnInit {
  crew: any;
  
  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.crew = this.crewService.getCrewData().find(crew => crew.id === +id); // Assuming we have an 'id' in the data
    }
  }

  calculateTotalIncome(dailyRate: number, daysOnBoard: number, currency: string): number {
    return dailyRate * daysOnBoard;
  }
}
