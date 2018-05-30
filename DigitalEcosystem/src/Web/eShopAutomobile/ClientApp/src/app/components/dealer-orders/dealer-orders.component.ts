
import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'dealer-orders',
    templateUrl: './dealer-orders.component.html',
    styleUrls: ['./dealer-orders.component.css'],
    animations: [fadeInOut]
})
export class DealerOrdersComponent {
 constructor(private authService: AuthService) {
    }

    get userName(): string {
        return this.authService.currentUser ? this.authService.currentUser.userName : "";
    }
}
