import { Routes } from '@angular/router';
import { CoverLetter } from './cover-letter/cover-letter';
import { Resume } from './resume/resume';

export const routes: Routes = [
  { path: '', redirectTo: 'resume', pathMatch: 'full' },
  { path: 'resume', component: Resume },
  { path: 'cover-letter', component: CoverLetter }
];
