
import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'distributor-order-status',
    templateUrl: './distributor-order-status.component.html',
    styleUrls: ['./distributor-order-status.component.css'],
    animations: [fadeInOut]
})
export class DistributorOrderStatusComponent {
 constructor(private authService: AuthService) {
    }

    get userName(): string {
        return this.authService.currentUser ? this.authService.currentUser.userName : "";
    }
}
