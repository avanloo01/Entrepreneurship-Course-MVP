import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {RouterModule } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  standalone: true,
  imports: [MatCardModule, MatIconModule, RouterModule],
  styleUrls: ['./city.component.scss']
})
export class CityComponent {
}
