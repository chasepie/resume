import { AfterViewInit, ChangeDetectionStrategy, Component } from '@angular/core';
import { replace } from 'feather-icons';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header implements AfterViewInit {
  protected readonly fullName = environment.fullName;
  protected readonly jobTitle = environment.jobTitle;
  protected readonly location = environment.location;
  protected readonly phone = environment.phone;
  protected readonly email = environment.email;
  protected readonly github = environment.github;

  public ngAfterViewInit(): void {
    replace();
  }
}
