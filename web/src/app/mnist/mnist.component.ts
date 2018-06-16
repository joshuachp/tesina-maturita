import { Component, ViewChild, OnInit } from '@angular/core';
import { DrawableDirective } from '../drawable.directive';

import * as tf from '@tensorflow/tfjs';

@Component({
    selector: 'app-mnist',
    templateUrl: './mnist.component.html',
    styleUrls: ['./mnist.component.scss']
})
export class MnistComponent implements OnInit {

    model: tf.Model;
    predictions: any;

    @ViewChild(DrawableDirective) canvas;

    constructor() { }

    ngOnInit() {
        this.loadModel();
    }

    async loadModel() {
        this.model = await tf.loadModel('/assets/model.json');
    }

    async predict(imageData: ImageData) {

        const pred = await tf.tidy(() => {

            // Convert the canvas pixels to
            let img = tf.fromPixels(imageData, 1);
            img = img.reshape([1, 28, 28, 1]);
            img = tf.cast(img, 'float32');

            // Make and format the predications
            const output = this.model.predict(img) as any;

            // Save predictions on the component
            this.predictions = Array.from(output.dataSync());
        });

    }
}
