import { Component } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    cards = [
        { title: 'Linear Regression', cols: 2, rows: 1, link: '/linear', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Linear_regression.svg/1200px-Linear_regression.svg.png' },
        { title: 'MNIST', cols: 1, rows: 1, link: '/mnist', content: 'Implementation of a hand-written digit reconizer.' },
        { title: 'Card 3', cols: 1, rows: 2, link: '', content: '' },
        { title: 'Card 4', cols: 1, rows: 1, link: '', content: '' }
    ];
}
