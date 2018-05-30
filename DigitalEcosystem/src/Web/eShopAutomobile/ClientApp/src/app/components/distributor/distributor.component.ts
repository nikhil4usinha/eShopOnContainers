import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'distributor',
    templateUrl: './distributor.component.html',
    styleUrls: ['./distributor.component.css'],
    animations: [fadeInOut]
})
export class DistributorComponent {
    constructor(private authService: AuthService) {
    }

    get userName(): string {
        return this.authService.currentUser ? this.authService.currentUser.userName : "";
    }
}
