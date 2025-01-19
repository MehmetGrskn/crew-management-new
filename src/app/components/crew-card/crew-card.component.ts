import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrewService } from '../../services/crew.service';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { Certificate } from '../../models/crew-model';
import { MatTableModule } from '@angular/material/table';


@Component({
  selector: 'app-crew-card',
  templateUrl: './crew-card.component.html',
  styleUrls: ['./crew-card.component.scss'],
  imports: [
    MatTabsModule,
    CommonModule,
    TranslateModule,
    MatButtonModule,
    MatTableModule

  ]
})
export class CrewCardComponent implements OnInit {
  crew: any;
  certificates: any;
  
  constructor(
    private route: ActivatedRoute,
    private crewService: CrewService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Crew verisini al
      this.crew = this.crewService.getCrewData().find(crew => crew.id === +id);
  
      // Sertifikaları al ve ata
      this.certificates = this.crewService.getCertificates(+id);
    }
  }
  

  calculateTotalIncome(dailyRate: number, daysOnBoard: number, currency: string): number {
    return dailyRate * daysOnBoard;
  }

  goHome(): void {
    window.location.href = '/';
  }
}
