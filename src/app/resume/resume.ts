import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Header } from '../header/header';

@Component({
  selector: 'app-resume',
  imports: [Header],
  templateUrl: './resume.html',
  styleUrl: './resume.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Resume {
  protected readonly expStart = new Date(2015, 3, 0);

  protected readonly expYears = Math.floor((Date.now() - this.expStart.getTime()) / (1000 * 60 * 60 * 24 * 365));
}
