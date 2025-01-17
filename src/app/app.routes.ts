import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CrewCardComponent } from './components/crew-card/crew-card.component';
import { CertificateTypeComponent } from './components/certificate-type/certificate-type.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'crew/:id', component: CrewCardComponent },
  { path: 'certificate-type', component: CertificateTypeComponent }

  
];
