import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule, matTabsAnimations } from '@angular/material/tabs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTabsModule, MatCardModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
