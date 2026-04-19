import { ChangeDetectionStrategy, Component } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cover-letter',
  templateUrl: './cover-letter.html',
  styleUrl: './cover-letter.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverLetter {
  protected readonly coverLetter = environment.coverLetter;

  protected getFormattedDate(): string {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month} ${day}<sup>${this.getOrdinalSuffix(day)}</sup>, ${year}`;
  }

  protected getOrdinalSuffix(day: number): string {
    if (day % 10 === 1 && day !== 11) {
      return 'st';
    } else if (day % 10 === 2 && day !== 12) {
      return 'nd';
    } else if (day % 10 === 3 && day !== 13) {
      return 'rd';
    } else {
      return 'th';
    }
  }
}
