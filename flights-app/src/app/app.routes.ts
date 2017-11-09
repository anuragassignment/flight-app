import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { AddFlightComponent } from './add-flight/add-flight.component';
import { AuthGuardService } from './services/auth-guard.service';

export const ROUTES: Routes = [
  { path: 'add-flight', canActivate: [AuthGuardService], component: AddFlightComponent },
  { path: 'flight-status', canActivate: [AuthGuardService], component: FlightStatusComponent },
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: '**', redirectTo: '' }
];
