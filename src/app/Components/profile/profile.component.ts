import { Component } from '@angular/core';
import { MatTabsModule, matTabsAnimations } from '@angular/material/tabs';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatTabsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

}
