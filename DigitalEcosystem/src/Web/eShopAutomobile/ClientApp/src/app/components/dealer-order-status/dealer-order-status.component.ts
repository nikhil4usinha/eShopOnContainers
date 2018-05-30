
import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'dealer-order-status',
    templateUrl: './dealer-order-status.component.html',
    styleUrls: ['./dealer-order-status.component.css'],
    animations: [fadeInOut]
})

export class DealerOrderStatusComponent {
 constructor(private authService: AuthService) {
    }

    get userName(): string {
        return this.authService.currentUser ? this.authService.currentUser.userName : "";
    }
}
