
import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'distributor-orders',
    templateUrl: './distributor-orders.component.html',
    styleUrls: ['./distributor-orders.component.css'],
    animations: [fadeInOut]
})
export class DistributorOrdersComponent {
 constructor(private authService: AuthService) {
    }

    get userName(): string {
        return this.authService.currentUser ? this.authService.currentUser.userName : "";
    }
}
