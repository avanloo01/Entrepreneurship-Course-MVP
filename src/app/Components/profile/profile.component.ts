import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule, matTabsAnimations } from '@angular/material/tabs';
import { DateRange, MatCalendarCellClassFunction, MatCalendarCellCssClasses, MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import * as moment from 'moment';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTabsModule, MatCardModule, MatDatepickerModule],
  providers: provideNativeDateAdapter(),
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  selected: Date | null | undefined;
  
}
