import { Component } from '@angular/core';


@Component({
    selector: 'book-a-car',
    templateUrl: './book-a-car.component.html',
    styleUrls: ['./book-a-car.component.css']
})

export class BookACarComponent {

    cars = {
        corolla: {
            le: {
                price: '$18,600',
                url: '',
                mileage: '28/36',
                engine: '1.8L 4-Cylinder',
                transmission: 'CVT'
            },
            se: {
                price: '$18,600',
                url: '',
                mileage: '28/36',
                engine: '1.8L 4-Cylinder',
                transmission: '6-Speed Manual'
            },
            xle: {
                price: '$18,600',
                url: '',
                mileage: '28/36',
                engine: '1.8L 4-Cylinder',
                transmission: 'CVT'
            },
        },
        camry: {
            le: {
                price: '$23,495',
                url: '',
                mileage: '29/41',
                engine: '2.5-L 4-Cylinder 8-Speed',
                transmission: 'Automatic'
            },
            se: {
                price: '$23,495',
                url: '',
                mileage: '29/41',
                engine: '2.5-L 4-Cylinder 8-Speed',
                transmission: 'Automatic'
            },
            xle: {
                price: '$23,495',
                url: '',
                mileage: '29/41',
                engine: '2.5-L 4-Cylinder 8-Speed',
                transmission: 'Automatic'
            },
        },
        highlander: {
            le: {
                price: '$31,030',
                url: '',
                mileage: '21/27',
                engine: 'FWD 2.7L 4-Cyl. 6-Speed',
                transmission: 'Automatic'
            },
            se: {
                price: '$31,030',
                url: '',
                mileage: '21/27',
                engine: 'FWD 3.5L V6 Direct Shift 8-Speed',
                transmission: 'Automatic'
            },
            xle: {
                price: '$31,030',
                url: '',
                mileage: '21/27',
                engine: 'AWD 3.5L V6 Direct Shift 8-Speed',
                transmission: 'Automatic'
            },
        },
        sienna: {
            le: {
                price: '$30,750',
                url: '',
                mileage: '19/27',
                engine: 'AWD 7-Passenger 3.5L V6 Direct Shift-8AT',
                transmission: 'Auto'
            },
            se: {
                price: '$30,750',
                url: '',
                mileage: '19/27',
                engine: 'Premium FWD 8-Passenger 3.5L V6 Direct Shift-8AT ',
                transmission: 'Auto'
            },
            xle: {
                price: '$30,750',
                url: '',
                mileage: '19/27',
                engine: 'AWD 7-Passenger 3.5L V6 Direct Shift-8AT',
                transmission: 'Auto'
            },
        },
    };

    makes = ['TOYOTA'];

    models = ['COROLLA', 'CAMRY', 'HIGHLANDER', 'SIENNA'];

    variants = ['LE', 'SE', 'XLE'];

    selectedModel = "CAMRY";

    selectedVariant = "SE";

    displayCar = this.cars[this.selectedModel.toLowerCase()][this.selectedVariant.toLowerCase()];

    displayCarImg = "/assets/images/" + this.selectedModel.toLowerCase() + "_" + this.selectedVariant.toLowerCase() + ".png";

    showCar = function () {
        this.displayCar = this.cars[this.selectedModel.toLowerCase()][this.selectedVariant.toLowerCase()];
        this.displayCarImg = "/assets/images/" + this.selectedModel.toLowerCase() + "_" + this.selectedVariant.toLowerCase() + ".png";
    }


}
