import { Component } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    cards = [
        { title: 'Introduction', cols: 1, rows: 1, link: '', content: 'Introduzione ai vari tipi di Intelligenza Artificiale (IA) e in particolare agli algoritmi di Machine Learning per le Neural Networks.' },
        { title: 'Linear Regression', cols: 1, rows: 2, link: '/linear', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Linear_regression.svg/1200px-Linear_regression.svg.png' },
        { title: 'MNIST', cols: 1, rows: 2, link: '/mnist', image: 'https://dmtyylqvwgyxw.cloudfront.net/instances/132/uploads/images/custom_image/image/1574/normal_687474703a2f2f692e7974696d672e636f6d2f76692f3051493378675875422d512f687164656661756c742e6a7067.jpg?v=1507808945' },
        { title: 'Card 4', cols: 1, rows: 2, link: '', content: '' },
        { title: 'Card 4', cols: 1, rows: 1, link: '', content: '' }
    ];
}
