import { Component } from '@angular/core';
import { fadeInOut } from '../../services/animations';


@Component({
    selector: 'buyer-order-status',
    templateUrl: './buyer-order-status.component.html',
    styleUrls: ['./buyer-order-status.component.css'],
    animations: [fadeInOut]
})

export class BuyerOrderStatusComponent {

}
